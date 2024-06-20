import os  # For file path handling
import subprocess  # For using yt-dlp command-line

def func_dubbing(video_url):
    
    output_dir = "static"
    
    audio_path = "output_de.wav"

    directory = "static"
    for filename in os.listdir(directory):
        if filename.endswith(".mp4"):
            filepath = os.path.join(directory, filename)
            os.remove(filepath)
            print(f"Deleted MP4 file: {filepath}")

    try:
        command = ["yt-dlp", "-f", "bestvideo[ext=mp4]+bestaudio[ext=m4a]", "--output", f"{output_dir}/%(title)s.%(ext)s", video_url]
        subprocess.run(command, check=True)

        downloaded_video_path = os.path.join(output_dir, os.listdir(output_dir)[0])  
        
        from moviepy.editor import VideoFileClip, AudioFileClip , CompositeAudioClip

        video_clip = VideoFileClip(downloaded_video_path)
        audio_clip = AudioFileClip(audio_path)
        final_clip = video_clip.set_audio(CompositeAudioClip([audio_clip]))

        output_filename = f"dubbed_{os.path.splitext(downloaded_video_path)[1]}"
        final_clip.write_videofile(os.path.join(output_dir, output_filename))

        return (f"Dubbed video created: {os.path.join(output_dir, output_filename)}")

    except subprocess.CalledProcessError as e:
        return (f"Error downloading video with yt-dlp: {e}")
    except Exception as e:
        return (f"An error occurred: {e}")