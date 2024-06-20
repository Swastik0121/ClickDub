from TTS.api import TTS
import os

def read_text_to_sentence(file_path):
  try:
    with open(file_path, "r") as file:
      lines = file.readlines()
    sentence = " ".join(lines)
    sentence = sentence.strip() 
    return sentence
  except FileNotFoundError:
    print(f"Error: File not found: {file_path}")
    return ""

def func_xtts(text_file_path):
  check_path = "output_de.wav"
  if os.path.isfile(check_path) and check_path.endswith(".wav"):
      os.remove(check_path)
      print(f"Deleted wav file: {check_path}")
  else:
      print(f"No wav file found at: {check_path}")

  combined_sentence = read_text_to_sentence(text_file_path)
  tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2", gpu=False)
  tts.tts_to_file(combined_sentence, file_path="output_de.wav",
                speaker_wav=["bg-03.wav","bg-05.wav", "bg-08.wav"],
                language="en",split_sentences=True)
  return ("File saved")


