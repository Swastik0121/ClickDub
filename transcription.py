import nltk
import youtube_transcript_api
from nltk import sent_tokenize
from youtube_transcript_api import YouTubeTranscriptApi as yta
import os

def func_transcription(yt_link):
    
    vid_id = yt_link.split('=')[1]
    data = yta.get_transcript(vid_id)
    
    transcript = ' '.join(item['text'] for item in data)
    sentences = sent_tokenize(transcript)
    
    final_tra = " ".join(sentences)
    
    check_path = "sample_transcript3.txt"
    if os.path.isfile(check_path) and check_path.endswith(".txt"):
        os.remove(check_path)
        print(f"Deleted text file: {check_path}")
    else:
        print(f"No text file found at: {check_path}")

    with open("sample_transcript3.txt", 'w', encoding = 'utf-8') as file:
        file.write(final_tra)
    
    return final_tra

