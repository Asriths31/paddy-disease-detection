from flask import *
import numpy as np
import tensorflow as tf
# import matplotlib.pyplot as plt
from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
##from tensorflow.keras.optimizers import Adam
import cv2
from keras.models import load_model
# from keras_preprocessing.image import img_to_array
import os
from werkzeug.utils import secure_filename
from PIL import Image


model = load_model("model.h5")


UPLOAD_FOLDER = os.path.join('static','uploads')
app = Flask(__name__,template_folder='templates',static_folder='static')
app.config['UPLOAD'] = UPLOAD_FOLDER


def predict(img):
    class_names = ['Bacterial leaf blight', 'Brown spot','Leaf smut']
    img1= image.load_img(img, target_size=(180, 180))  # Adjust target_size as per your model's input size
    img_array = image.img_to_array(img1)
    img_array = np.expand_dims(img_array, axis=0)

    # Predict the class probabilities
    prediction = model.predict(img_array)[0]
    idx = np.argmax(prediction)
    
    return class_names[idx],prediction[idx]

   
    
@app.route('/')

def home():
    return render_template('home.html')
    

@app.route('/result',methods=['GET','POST'])

def submit():
   
    if request.method == 'POST':
        file=request.files['uploaded-img']
        filename=secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD'],filename))
        img=os.path.join(app.config['UPLOAD'],filename)
        resimg,accuracy=predict(img)
        return render_template('upload.html',img=img,name=filename,prediction=resimg,confidence=accuracy)
       
    return render_template('upload.html')

if __name__=='__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run( debug =True)

