from flask import *
import numpy as np
import tensorflow as tf
# import matplotlib.pyplot as plt
from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
##from tensorflow.keras.optimizers import Adam

from keras.models import load_model
from keras_preprocessing.image import img_to_array
import os
from werkzeug.utils import secure_filename
from PIL import Image


model = load_model("model.h5")




UPLOAD_FOLDER = os.path.join('static','uploads')
app = Flask(__name__,template_folder='templates',static_folder='static')
# app.config['UPLOAD'] = UPLOAD_FOLDER


def predict(img_path,target_size=(180, 180)):
    class_names = ['Bacterial leaf blight', 'Brown spot', 'Leaf smut']
    try:
        img = image.load_img(img_path, target_size=target_size)
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        
        # Predict the class probabilities
        prediction = model.predict(img_array)[0]
        idx = np.argmax(prediction)
        
        return class_names[idx], prediction[idx]
    except Exception as e:
        return None, None  # Return None values for both prediction and confidence in case of an error
   
    
@app.route('/')

def home():
    print("home")
    return render_template('home.html')
    

@app.route('/result',methods=['GET','POST'])

def submit():
    print("submit")
    if request.method == 'POST':
        print("result")
        if 'uploaded-img' in request.files:
            file = request.files['uploaded-img']
            if file and file is not None:
                print(file)
                filename = secure_filename(file.filename)
                file.save(os.path.join('static', 'images', filename))
                img = os.path.join('static', 'images', filename)
                # resimg, accuracy = predict(img)
                return render_template('upload.html',img=img,prediction="Brown spot")
            else:
                print("no file given")
        else:
            print("uploaded-img not in request.files")
        
    return render_template('upload.html')



# @app.route('/api/predict',methods=['post'])

# def api_predict():
#     data=request.get_json(force=true)
#     file=data["content"]
#     filename=secure_filename(file.filename)
#     file.save(os.path.join(app.config['UPLOAD'],filename))
#     img=os.path.join(app.config['UPLOAD'],filename)
#     resimg,accuracy=predict(img)
#     return jsonify({"prediction":resimg})
   

if __name__=='__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run( debug =True)

