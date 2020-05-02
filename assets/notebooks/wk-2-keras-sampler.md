<hgroup style="margin: 5px 0px 15px;">
    <p style="text-align: center;font-size:36px;color:#249ce7;">Feed-Forward Neural Network Example<br><br>Using Keras</p>
</hgroup>


```python
%matplotlib inline
import tensorflow as tf
from keras.datasets import mnist
from keras.utils import to_categorical
from keras.models import Sequential
from keras.layers import Dense, Dropout

import matplotlib.pyplot as plt
```

    Using TensorFlow backend.
    

<div>
    <p style="font-size:16px;color:#249ce7;margin-bottom: 5px;">
        Alternative methods of importing data. This goes direct from tensorflow:
    </p>
<pre>
fashion_mnist = tf.keras.datasets.fashion_mnist
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
</pre>
<div>    


```python
#fashion_mnist = tf.keras.datasets.fashion_mnist
# (train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
BATCH_SIZE = 128
NUM_CLASSES = 10
EPOCHS = 20

(X_train, y_train), (X_test, y_test) = mnist.load_data()
```

<div>
    <p style="font-size:16px;color:#249ce7;margin-bottom: 5px;">Here, we will:</p>
<ul style="color:#c9d8da">
    <li>Flatten to a vector of 784, since the current shape is 28 by 28, which equals 784</li>
    <li>Cast as 32-bit floating point</li>
    <li>Divide by 255. This will result in values that fall between zero and one.</li>
</ul>
</div>


```python
# Flatten, cast to float, and divide by 255 to bring values in between zero and one.
X_train = X_train.reshape(60000, 784)
X_test = X_test.reshape(10000, 784)

X_train = X_train.astype("float32")
X_test = X_test.astype("float32")

X_train /= 255
X_test /= 255
```

<div>
    <p style="font-size:16px;color:#249ce7;margin:20px 0 20px 0;">Now `One Hot` encode the 'y' values.<br /><br />They will transform into a length of 10 with zero at the start.</p>
</div>


```python
y_train = to_categorical(y_train, NUM_CLASSES)
y_test = to_categorical(y_test, NUM_CLASSES)
```

<div>
    <p style="font-size:16px;color:#249ce7">
        Build our model:
    </p>
<ol style="color:#c9d8da">
    <li>Create a Sequential model</li>
    <li>Add a Dense layer with relu activation function</li>
    <li>Sandwich Dropout layer with a rate of 20%.</li>
    <li>Repeat the last two steps without an input shape.</li>
    <li>Add a final layer with our desired number of classes as an output and softmax as the activation function.</li>    
</ol>    
</div>


```python
model = Sequential()
model.add(Dense(512, activation="relu", input_shape=(784,)))
model.add(Dropout(0.2))

model.add(Dense(512, activation="relu"))
model.add(Dropout(0.2))

model.add(Dense(NUM_CLASSES, activation="softmax"))
```

<div>
    <p style="font-size:16px;color:#249ce7;margin:20px 0 20px 0;">
        Print out a summary of the model that was built.
    </p>
</div>


```python
model.summary()
```

    Model: "sequential_2"
    _________________________________________________________________
    Layer (type)                 Output Shape              Param #   
    =================================================================
    dense_1 (Dense)              (None, 512)               401920    
    _________________________________________________________________
    dropout_1 (Dropout)          (None, 512)               0         
    _________________________________________________________________
    dense_2 (Dense)              (None, 512)               262656    
    _________________________________________________________________
    dropout_2 (Dropout)          (None, 512)               0         
    _________________________________________________________________
    dense_3 (Dense)              (None, 10)                5130      
    =================================================================
    Total params: 669,706
    Trainable params: 669,706
    Non-trainable params: 0
    _________________________________________________________________
    

<div>
    <p style="font-size:16px;color:#249ce7;margin:20px 0 20px 0;">
        Compile the model and fit to our training data using our prespecified batch size and epoch count.<br><br>Evaluate against our testing data.
    </p>
</div>


```python
model.compile(loss="categorical_crossentropy", optimizer="sgd", metrics=["accuracy"])
model.fit(X_train, y_train, batch_size=BATCH_SIZE, epochs = EPOCHS, validation_data=(X_test, y_test))
```

    WARNING:tensorflow:From c:\users\work1\appdata\local\programs\spyder\venv\lib\site-packages\keras\backend\tensorflow_backend.py:422: The name tf.global_variables is deprecated. Please use tf.compat.v1.global_variables instead.
    
    Train on 60000 samples, validate on 10000 samples
    Epoch 1/20
    60000/60000 [==============================] - 2s 33us/step - loss: 1.2057 - accuracy: 0.6859 - val_loss: 0.5439 - val_accuracy: 0.8694
    Epoch 2/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.5375 - accuracy: 0.8475 - val_loss: 0.3796 - val_accuracy: 0.8956
    Epoch 3/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.4277 - accuracy: 0.8759 - val_loss: 0.3257 - val_accuracy: 0.9107
    Epoch 4/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.3786 - accuracy: 0.8889 - val_loss: 0.2954 - val_accuracy: 0.9160
    Epoch 5/20
    60000/60000 [==============================] - 1s 22us/step - loss: 0.3476 - accuracy: 0.8991 - val_loss: 0.2743 - val_accuracy: 0.9222
    Epoch 6/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.3207 - accuracy: 0.9062 - val_loss: 0.2564 - val_accuracy: 0.9280
    Epoch 7/20
    60000/60000 [==============================] - 1s 24us/step - loss: 0.3011 - accuracy: 0.9124 - val_loss: 0.2422 - val_accuracy: 0.9322
    Epoch 8/20
    60000/60000 [==============================] - 1s 24us/step - loss: 0.2828 - accuracy: 0.9188 - val_loss: 0.2290 - val_accuracy: 0.9350
    Epoch 9/20
    60000/60000 [==============================] - 1s 23us/step - loss: 0.2681 - accuracy: 0.9210 - val_loss: 0.2176 - val_accuracy: 0.9377
    Epoch 10/20
    60000/60000 [==============================] - 1s 22us/step - loss: 0.2554 - accuracy: 0.9257 - val_loss: 0.2083 - val_accuracy: 0.9400
    Epoch 11/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.2433 - accuracy: 0.9294 - val_loss: 0.1990 - val_accuracy: 0.9423
    Epoch 12/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.2341 - accuracy: 0.9320 - val_loss: 0.1902 - val_accuracy: 0.9446
    Epoch 13/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.2239 - accuracy: 0.9356 - val_loss: 0.1825 - val_accuracy: 0.9467
    Epoch 14/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.2150 - accuracy: 0.9382 - val_loss: 0.1759 - val_accuracy: 0.9486
    Epoch 15/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.2059 - accuracy: 0.9412 - val_loss: 0.1695 - val_accuracy: 0.9503
    Epoch 16/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.1988 - accuracy: 0.9415 - val_loss: 0.1632 - val_accuracy: 0.9521
    Epoch 17/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.1909 - accuracy: 0.9450 - val_loss: 0.1592 - val_accuracy: 0.9524
    Epoch 18/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.1857 - accuracy: 0.9463 - val_loss: 0.1535 - val_accuracy: 0.9542
    Epoch 19/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.1802 - accuracy: 0.9482 - val_loss: 0.1489 - val_accuracy: 0.9558
    Epoch 20/20
    60000/60000 [==============================] - 1s 21us/step - loss: 0.1763 - accuracy: 0.9488 - val_loss: 0.1462 - val_accuracy: 0.9568
    




    <keras.callbacks.callbacks.History at 0x1798eceaa88>



<div>
    <p style="font-size:16px;color:#249ce7;margin:20px 0 20px 0;">
        Evaluate results and print our scores.
    </p>
</div>


```python
scores = model.evaluate(X_test, y_test, verbose=())
scr_msg = f"Test loss: {scores[0]:.4f}\nTest accuracy: {scores[1]:.4f}"
print(scr_msg)
```

    Test loss: 0.1462
    Test accuracy: 0.9568
    
