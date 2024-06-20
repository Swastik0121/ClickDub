from transcription import func_transcription
from xtts import func_xtts
from dubbing import func_dubbing
from summarizer import top10_sent
from lang_converter import translate_text_file
from flask import Flask, request, render_template
app= Flask(__name__)

@app.route('/')
def my_form():
    return render_template('index.html')

@app.route('/trans')
def my_form1():
    return render_template('trans.html')

@app.route('/summarization')
def my_form2():
    return render_template('summarization.html')

@app.route('/dub')
def my_form3():
    return render_template('dub.html')

@app.route('/load')
def my_form4():
    return render_template('load.html')

# transcription
@app.route('/transcription',methods=['GET', 'POST'])
def trans():
    you_link = request.form['yt']
    translate_text = func_transcription(you_link)
    print(translate_text)

    return render_template('popup.html',text=translate_text)

@app.route('/dub',methods=['GET', 'POST'])
def dub():
    if request.form['trans'] == 'transcript':
        you_link = request.form['yt']
        translate_text = func_transcription(you_link)
        print(translate_text)
        return render_template('popup.html',text=translate_text)
    
    else:
        you_link = request.form['yt']
        translate_text = func_transcription(you_link)
        print(translate_text)
        transcript_file = "sample_transcript3.txt"
        german_file_path = "translated_german_text.txt"
        translate_de = translate_text_file(transcript_file, german_file_path)
        print(translate_de)
        gen_audio = func_xtts(german_file_path)
        print(gen_audio)
        dub_video = func_dubbing(you_link)
        print(dub_video)

        return render_template('dub.html')

@app.route('/summ',methods=['GET', 'POST'])
def summ():
    article_link = request.form['urlInput']
    summed_text = top10_sent(article_link)
    print(summed_text)

    return render_template('popup.html',text=summed_text)



