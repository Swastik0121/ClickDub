from googletrans import Translator
import os

def translate_text_file(input_file_path, output_file_path, target_language="de"):
  
  try:
    # Open the English text file for reading
    with open(input_file_path, "r") as file:
      text_to_translate = file.read()

    # Create a Google Translate translator object
    translator = Translator()

    # Translate the text
    translated_text = translator.translate(text_to_translate, dest=target_language).text

    check_path = "translated_german_text.txt"
    if os.path.isfile(check_path) and check_path.endswith(".txt"):
        os.remove(check_path)
        print(f"Deleted text file: {check_path}")
    else:
        print(f"No text file found at: {check_path}")

    # Save the translated text to a new file
    with open(output_file_path, "w") as file:
      file.write(translated_text)

    print(f"Text translated from English to {target_language}.")
    print(f"Output saved to: {output_file_path}")

  except FileNotFoundError:
    print(f"Error: File not found: {input_file_path}")
  except Exception as e:
    print(f"An error occurred during translation: {e}")
  return ("dubbed.")

