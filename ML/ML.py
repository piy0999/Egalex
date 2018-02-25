import soundfile as sf            # To read .flac files.   
import speech_recognition as sr   # pip install SpeechRecognition.

import os
import numpy as np

from pybrain.datasets                import ClassificationDataSet
from pybrain.tools.shortcuts         import buildNetwork
from pybrain.supervised.trainers     import BackpropTrainer
from pybrain.structure.modules       import SoftmaxLayer
from pybrain.tools.customxml.networkreader import NetworkReader
from pybrain.tools.customxml.networkwriter import NetworkWriter

from pybrain.structure import FullConnection
from pybrain.structure import FeedForwardNetwork
from pybrain.structure import LinearLayer
from pybrain.structure import SoftmaxLayer
from pybrain.structure import TanhLayer

path       = "LibriSpeech/"        #
tstSet     = "test-clean/"         # Test set. 
  


samples = [path+tstSet+"19/227/19-227-0056.flac",
           path+tstSet+"26/496/26-496-0019.flac",
           path+tstSet+"405/130895/405-130895-0030.flac"]


r = sr.Recognizer()
i = 0
for sample in samples:
  with sr.AudioFile(sample) as source:
    audio = r.record(source)      
    s = r.recognize_google(audio)
    print ("Reading file: " + sample)
    print ("\n"[:-1])
    print ("Obtained (With Deep Learning):")
    print (s)
    print ("\n"[:-1])
    i += 1

#Sending out post
r = requests.post('https://hooks.zapier.com/hooks/catch/2888786/80e87z/', data = {'desc': s})