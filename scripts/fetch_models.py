#!/usr/bin/env python3
"""
Fetch trending models from HuggingFace and save to JSON.
Run this script periodically to keep models data fresh.
"""

import json
from datetime import datetime, timedelta
from huggingface_hub import HfApi, list_models

def get_task_category(task):
    """Map HuggingFace tasks to our categories."""
    task_mapping = {
        "text-generation": "language",
        "text-generation-instruct": "language",
        "conversational": "language",
        "chat-template": "language",
        "code-generation": "code",
        "fill-mask": "language",
        "text-classification": "language",
        "token-classification": "language",
        "question-answering": "language",
        "summarization": "language",
        "translation": "language",
        "image-classification": "image",
        "image-segmentation": "image",
        "object-detection": "image",
        "image-to-text": "image",
        "image-text-to-text": "multimodal",
        "visual-question-answering": "multimodal",
        "text-to-image": "image",
        "image-to-image": "image",
        "text-to-video": "video",
        "video-classification": "video",
        "automatic-speech-recognition": "audio",
        "text-to-speech": "audio",
        "text-to-audio": "audio",
        "audio-to-audio": "audio",
        "audio-classification": "audio",
        "feature-extraction": "reasoning",
    }
    return task_mapping.get(task, "language")

def get_company_from_model_id(model_id):
    """Extract company from model ID."""
    model_id_lower = model_id.lower()
    
    company_mapping = {
        "openai": "OpenAI",
        "anthropic": "Anthropic",
        "google": "Google DeepMind",
        "meta": "Meta",
        "llama": "Meta",
        "mistralai": "Mistral AI",
        "mistral": "Mistral AI",
        "deepseek": "DeepSeek",
        "deepseek-ai": "DeepSeek",
        "qwen": "Qwen",
        "qwen2": "Qwen",
        "baidu": "Baidu",
        "ernie": "Baidu",
        "bytedance": "ByteDance",
        "tencent": "Tencent",
        "hunyuan": "Tencent",
        "zhipu": "Zhipu AI",
        "glm": "Zhipu AI",
        "moonshot": "Moonshot AI",
        "kimi": "Moonshot AI",
        "alibaba": "Alibaba",
        "qwen": "Alibaba",
        "stabilityai": "Stability AI",
        "stability-ai": "Stability AI",
        "runway": "Runway",
        "midjourney": "Midjourney",
        "EleutherAI": "EleutherAI",
        "bigscience": "BigScience",
        "tiiuae": "TII",
        "falcon": "TII",
        "bigcode": "BigCode",
        "starchat": "BigCode",
        "nvidia": "NVIDIA",
        "cerebras": "Cerebras",
        "cohere": "Cohere",
        "ai21": "AI21 Labs",
        "jurassic": "AI21 Labs",
        "anthropic": "Anthropic",
        "xai": "xAI",
        "grok": "xAI",
        "amazon": "Amazon",
        "octernship": "Octernship",
        "apple": "Apple",
        "microsoft": "Microsoft",
        "phi": "Microsoft",
        "redis": "Redis",
        "voyageai": "Voyage AI",
        "bge": "BAAI",
        "baai": "BAAI",
        "b朵": "BAAI",
    }
    
    for key, company in company_mapping.items():
        if key in model_id_lower:
            return company
    
    # Try to extract organization from model_id (format: org/model-name)
    if "/" in model_id:
        org = model_id.split("/")[0]
        return org.replace("-", " ").replace("_", " ").title()
    
    return "Community"

def is_open_source(model_id):
    """Check if model is likely open source based on common patterns."""
    os_indicators = ["llama", "mistral", "qwen", "phi", "gemma", "OLMo", "Falcon", 
                     "Stable", "BAAI", "bigcode", "EleutherAI", "bigscience", "openchat",
                     "dbrx", "mixtral", "command", " Sword", "RedPajama", "OpenChat",
                     " Tiny", "OpenChat", "Deci", "Octopus", "Mythomedia", "LLaVA",
                     "Yi", "Bunny", "Phi", "SmolLM", "Smol", "Qwen", "Atla"]
    model_lower = model_id.lower()
    return any(indicator.lower() in model_lower for indicator in os_indicators)

def fetch_trending_models(limit=50):
    """Fetch trending models from HuggingFace."""
    print("Fetching trending models from HuggingFace...")
    
    models = []
    seen_ids = set()
    
    # Get trending models (sorted by downloads)
    for model in list_models(sort="downloads", limit=limit * 3):
        if model.id in seen_ids:
            continue
        seen_ids.add(model.id)
        
        # Skip very small models (often not useful)
        if model.id.startswith("tiny-") or model.id.startswith("small-"):
            continue
        
        # Get task/category
        card = model.card_data or {}
        task = getattr(model, 'pipeline_tag', None) or card.get('library_name', 'text-generation')
        
        model_info = {
            "id": f"hf_{model.id.replace('/', '_')}",
            "name": model.id,
            "company": get_company_from_model_id(model.id),
            "category": get_task_category(task),
            "description": card.get("model_summary", ""),
            "downloads": model.downloads,
            "lastUpdated": str(model.last_modified) if model.last_modified else "",
            "openSource": is_open_source(model.id),
            "isTrending": True,
        }
        
        # Add description if empty
        if not model_info["description"]:
            if card.get("language"):
                model_info["description"] = f"Model with {model.downloads:,} downloads. Language: {card.get('language')}"
            else:
                model_info["description"] = f"Popular model with {model.downloads:,} downloads on HuggingFace."
        
        models.append(model_info)
        
        if len(models) >= limit:
            break
    
    return models

def save_to_json(models, filename="trending_models.json"):
    """Save models to JSON file."""
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(models, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(models)} trending models to {filename}")

def main():
    print(f"Fetching HuggingFace trending models - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    models = fetch_trending_models(limit=100)
    save_to_json(models, "src/data/trending_models.json")
    print("Done!")

if __name__ == "__main__":
    main()
