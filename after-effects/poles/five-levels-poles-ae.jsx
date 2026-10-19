/*
  The 5 levels of healing \u2014 System model
  After Effects rebuild of brand/five-levels-navy.png (Dietrich Klinghardt brand style).

  How to run: After Effects > File > Scripts > Run Script File... > five-levels-ae.jsx
  Creates a 3840x2160 comp where every plate, line and dot is its own shape layer
  and every piece of copy is an editable text layer.

  Fonts: install everything in the fonts/ folder first. They are static cuts of DM Sans and
  Newsreader at the exact optical sizes the approved PNG was rendered with, so glyph shapes and
  line widths match 1:1. The brand headline face is Kalice: set USE_KALICE below.
*/
(function () {

var LAYOUT = {"width":1920,"height":1080,"compName":"The 5 levels of healing \u2014 polarity model","bg":[0.00784313725490196,0.2196078431372549,0.4],"glows":[{"name":"Atmosphere \u2014 south shadow","color":[0.00392156862745098,0.08627450980392157,0.17254901960784313],"alpha":0.85,"center":[960,1010],"radius":[1250,520]},{"name":"Atmosphere \u2014 sky haze","color":[0.5098039215686274,0.7254901960784313,0.8431372549019608],"alpha":0.2,"center":[960,300],"radius":[1100,560]},{"name":"Atmosphere \u2014 north light","color":[0.8784313725490196,0.9411764705882353,0.9686274509803922],"alpha":0.28,"center":[960,150],"radius":[520,300]}],"shapes":[{"type":"shape","name":"Grid 01","kind":"path","closed":false,"points":[[330,250],[330,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 02","kind":"path","closed":false,"points":[[420,250],[420,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 03","kind":"path","closed":false,"points":[[510,250],[510,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 04","kind":"path","closed":false,"points":[[600,250],[600,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 05","kind":"path","closed":false,"points":[[690,250],[690,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 06","kind":"path","closed":false,"points":[[780,250],[780,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 07","kind":"path","closed":false,"points":[[870,250],[870,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 08","kind":"path","closed":false,"points":[[960,250],[960,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 09","kind":"path","closed":false,"points":[[1050,250],[1050,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 10","kind":"path","closed":false,"points":[[1140,250],[1140,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 11","kind":"path","closed":false,"points":[[1230,250],[1230,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 12","kind":"path","closed":false,"points":[[1320,250],[1320,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 13","kind":"path","closed":false,"points":[[1410,250],[1410,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 14","kind":"path","closed":false,"points":[[1500,250],[1500,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Grid 15","kind":"path","closed":false,"points":[[1590,250],[1590,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.05,"width":1}},{"type":"shape","name":"Axis line","kind":"path","closed":false,"points":[[170,920],[170,260]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis arrow north","kind":"path","closed":false,"points":[[164,266],[170,250],[176,266]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis arrow south","kind":"path","closed":false,"points":[[164,914],[170,930],[176,914]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis tick objective","kind":"path","closed":false,"points":[[160,575],[180,575]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"text","name":"Label LIGHT","runs":[{"text":"LIGHT","x":145.4296875,"y":228,"rotation":0,"fontSize":14,"weight":500,"family":"sans","tracking":139.99999999999997,"color":{"rgb":[1,1,1],"a":1}}]},{"type":"text","name":"Label SHADOW","runs":[{"text":"SHADOW","x":133.4296875,"y":966,"rotation":0,"fontSize":14,"weight":500,"family":"sans","tracking":139.99999999999997,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1}}]},{"type":"text","name":"Label OBJECTIVE","runs":[{"text":"OBJECTIVE","x":192,"y":580,"rotation":0,"fontSize":14,"weight":500,"family":"sans","tracking":139.99999999999997,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1}}]},{"type":"plate","name":"Plate 01 Physical body","faces":[{"name":"Top face","kind":"path","closed":true,"points":[[960,442.75],[1190,575],[960,707.25],[730,575]],"fill":{"rgb":[0.9450980392156862,0.9568627450980393,0.9568627450980393],"opacity":1},"stroke":{"rgb":[0.9450980392156862,0.9568627450980393,0.9568627450980393],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 01 Physical body","kind":"path","closed":false,"points":[[1196,575],[1220,575]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 01 Physical body","kind":"ellipse","center":[1190,575],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 02 Energy body \u2014 north","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[776,475],[960,580.8],[960,594.8],[776,489]],"fill":{"rgb":[0.7490196078431373,0.8392156862745098,0.8823529411764706],"opacity":0.89},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[960,580.8],[1144,475],[1144,489],[960,594.8]],"fill":{"rgb":[0.6431372549019608,0.7607843137254902,0.8156862745098039],"opacity":0.89},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[960,369.2],[1144,475],[960,580.8],[776,475]],"fill":{"rgb":[0.8666666666666667,0.9215686274509803,0.9450980392156862],"opacity":0.74},"stroke":{"rgb":[0.9176470588235294,0.9568627450980393,0.9725490196078431],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 02 Energy body \u2014 north","kind":"path","closed":false,"points":[[1150,475],[1220,475]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 02 Energy body \u2014 north","kind":"ellipse","center":[1144,475],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 02 Energy body \u2014 south","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[776,675],[960,569.2],[960,555.2],[776,661]],"fill":{"rgb":[0.1568627450980392,0.27450980392156865,0.34901960784313724],"opacity":0.85},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[960,569.2],[1144,675],[1144,661],[960,555.2]],"fill":{"rgb":[0.11764705882352941,0.21568627450980393,0.2784313725490196],"opacity":0.85},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[960,569.2],[1144,675],[960,780.8],[776,675]],"fill":{"rgb":[0.2,0.33725490196078434,0.43529411764705883],"opacity":0.7},"stroke":{"rgb":[0.30980392156862746,0.4588235294117647,0.5647058823529412],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 02 Energy body \u2014 south","kind":"path","closed":false,"points":[[770,675],[670,675]],"fill":null,"stroke":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"opacity":0.3,"width":1}},{"type":"shape","name":"Dot 02 Energy body \u2014 south","kind":"ellipse","center":[776,675],"radius":[5,5],"fill":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 03 Mental body \u2014 north","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[812.8,395],[960,479.64],[960,491.64],[812.8,407]],"fill":{"rgb":[0.09019607843137255,0.5058823529411764,0.5176470588235295],"opacity":0.77},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[960,479.64],[1107.2,395],[1107.2,407],[960,491.64]],"fill":{"rgb":[0.07058823529411765,0.41568627450980394,0.4235294117647059],"opacity":0.77},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[960,310.36],[1107.2,395],[960,479.64],[812.8,395]],"fill":{"rgb":[0.11764705882352941,0.615686274509804,0.6313725490196078],"opacity":0.62},"stroke":{"rgb":[0.4980392156862745,0.8392156862745098,0.8470588235294118],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 03 Mental body \u2014 north","kind":"path","closed":false,"points":[[1113.2,395],[1220,395]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 03 Mental body \u2014 north","kind":"ellipse","center":[1107.2,395],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 03 Mental body \u2014 south","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[812.8,755],[960,670.36],[960,658.36],[812.8,743]],"fill":{"rgb":[0.043137254901960784,0.23921568627450981,0.2784313725490196],"opacity":0.77},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[960,670.36],[1107.2,755],[1107.2,743],[960,658.36]],"fill":{"rgb":[0.03137254901960784,0.1803921568627451,0.21176470588235294],"opacity":0.77},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[960,670.36],[1107.2,755],[960,839.64],[812.8,755]],"fill":{"rgb":[0.058823529411764705,0.3058823529411765,0.35294117647058826],"opacity":0.62},"stroke":{"rgb":[0.1803921568627451,0.43529411764705883,0.47058823529411764],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 03 Mental body \u2014 south","kind":"path","closed":false,"points":[[806.8,755],[670,755]],"fill":null,"stroke":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"opacity":0.3,"width":1}},{"type":"shape","name":"Dot 03 Mental body \u2014 south","kind":"ellipse","center":[812.8,755],"radius":[5,5],"fill":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 04 Intuitive body \u2014 north","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[842.24,317],[960,384.712],[960,394.712],[842.24,327]],"fill":{"rgb":[0.5254901960784314,0.7254901960784313,0.807843137254902],"opacity":0.55},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[960,384.712],[1077.76,317],[1077.76,327],[960,394.712]],"fill":{"rgb":[0.43529411764705883,0.6509803921568628,0.7450980392156863],"opacity":0.55},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[960,249.28799999999998],[1077.76,317],[960,384.712],[842.24,317]],"fill":{"rgb":[0.611764705882353,0.796078431372549,0.8784313725490196],"opacity":0.4},"stroke":{"rgb":[0.8117647058823529,0.9137254901960784,0.9568627450980393],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 04 Intuitive body \u2014 north","kind":"path","closed":false,"points":[[1083.76,317],[1220,317]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 04 Intuitive body \u2014 north","kind":"ellipse","center":[1077.76,317],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 04 Intuitive body \u2014 south","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[842.24,833],[960,765.288],[960,755.288],[842.24,823]],"fill":{"rgb":[0.0392156862745098,0.13333333333333333,0.2196078431372549],"opacity":0.7000000000000001},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[960,765.288],[1077.76,833],[1077.76,823],[960,755.288]],"fill":{"rgb":[0.027450980392156862,0.09803921568627451,0.16470588235294117],"opacity":0.7000000000000001},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[960,765.288],[1077.76,833],[960,900.712],[842.24,833]],"fill":{"rgb":[0.054901960784313725,0.17254901960784313,0.2784313725490196],"opacity":0.55},"stroke":{"rgb":[0.20784313725490197,0.34509803921568627,0.4627450980392157],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 04 Intuitive body \u2014 south","kind":"path","closed":false,"points":[[836.24,833],[670,833]],"fill":null,"stroke":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"opacity":0.3,"width":1}},{"type":"shape","name":"Dot 04 Intuitive body \u2014 south","kind":"ellipse","center":[842.24,833],"radius":[5,5],"fill":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 05 Spiritual dimension \u2014 north","faces":[{"name":"Top face","kind":"path","closed":true,"points":[[960,184.8304],[1054.208,239],[960,293.1696],[865.792,239]],"fill":{"rgb":[1,1,1],"opacity":0.16},"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.9,"width":1.2}}],"gridLines":[{"name":"Grid line","kind":"path","closed":false,"points":[[877.568,232.2288],[971.7760000000001,286.3984]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[877.568,245.7712],[971.7760000000001,191.6016]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[889.344,225.4576],[983.552,279.6272]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[889.344,252.5424],[983.552,198.37279999999998]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[901.12,218.6864],[995.328,272.856]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[901.12,259.3136],[995.328,205.144]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[912.896,211.9152],[1007.104,266.0848]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[912.896,266.0848],[1007.104,211.9152]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[924.672,205.144],[1018.8800000000001,259.3136]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[924.672,272.856],[1018.8800000000001,218.6864]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[936.448,198.37279999999998],[1030.656,252.5424]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[936.448,279.6272],[1030.656,225.4576]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[948.224,191.6016],[1042.432,245.7712]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[948.224,286.3984],[1042.432,232.2288]],"fill":null,"stroke":{"rgb":[0.9450980392156862,0.9725490196078431,0.984313725490196],"opacity":0.7,"width":0.8}}]},{"type":"shape","name":"Leader 05 Spiritual dimension \u2014 north","kind":"path","closed":false,"points":[[1060.208,239],[1220,239]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 05 Spiritual dimension \u2014 north","kind":"ellipse","center":[1054.208,239],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 05 Spiritual dimension \u2014 south","faces":[{"name":"Top face","kind":"path","closed":true,"points":[[960,856.8304],[1054.208,911],[960,965.1696],[865.792,911]],"fill":{"rgb":[0.03137254901960784,0.12549019607843137,0.22745098039215686],"opacity":0.3},"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.9,"width":1.2}}],"gridLines":[{"name":"Grid line","kind":"path","closed":false,"points":[[877.568,904.2288],[971.7760000000001,958.3983999999999]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[877.568,917.7712],[971.7760000000001,863.6016000000001]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[889.344,897.4576],[983.552,951.6271999999999]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[889.344,924.5424],[983.552,870.3728000000001]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[901.12,890.6864],[995.328,944.856]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[901.12,931.3136],[995.328,877.144]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[912.896,883.9152],[1007.104,938.0848]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[912.896,938.0848],[1007.104,883.9152]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[924.672,877.144],[1018.8800000000001,931.3136]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[924.672,944.856],[1018.8800000000001,890.6864]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[936.448,870.3728000000001],[1030.656,924.5424]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[936.448,951.6271999999999],[1030.656,897.4576]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[948.224,863.6016000000001],[1042.432,917.7712]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[948.224,958.3983999999999],[1042.432,904.2288]],"fill":null,"stroke":{"rgb":[0.24705882352941178,0.37254901960784315,0.48627450980392156],"opacity":0.7,"width":0.8}}]},{"type":"shape","name":"Leader 05 Spiritual dimension \u2014 south","kind":"path","closed":false,"points":[[859.792,911],[670,911]],"fill":null,"stroke":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"opacity":0.3,"width":1}},{"type":"shape","name":"Dot 05 Spiritual dimension \u2014 south","kind":"ellipse","center":[865.792,911],"radius":[5,5],"fill":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"opacity":1},"stroke":null}],"html":[{"baseName":"Eyebrow","groups":[{"role":"eyebrow","lines":["POLARITY MODEL"],"x":120,"baselines":[111],"fontSize":15,"weight":500,"family":"sans","tracking":140,"color":{"rgb":[1,1,1],"a":1},"leading":18}]},{"baseName":"Headline","groups":[{"role":"h1","lines":["The 5 levels of"],"x":120,"baselines":[180],"fontSize":72,"weight":300,"family":"serif","tracking":-15.000000000000002,"color":{"rgb":[1,1,1],"a":1},"leading":75.6},{"role":"b","lines":["healing"],"x":573.625,"baselines":[180],"fontSize":72,"weight":400,"family":"serif","tracking":-15.000000000000002,"color":{"rgb":[1,1,1],"a":1},"leading":75.6}]},{"baseName":"Level 01","groups":[{"role":"num","lines":["01"],"x":1250,"baselines":[579],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Physical body"],"x":1294,"baselines":[579],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["1 PB"],"x":1487.046875,"baselines":[579],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["Mechanics, chemistry and physics."],"x":1294,"baselines":[614],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"North 02","groups":[{"role":"num","lines":["02"],"x":1250,"baselines":[479],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Energy body"],"x":1294,"baselines":[479],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["2 EB"],"x":1470.265625,"baselines":[479],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["The link between mind and body: biophysics."],"x":1294,"baselines":[514],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"South 02","groups":[{"role":"name","lines":["Energy body"],"x":413.65625,"baselines":[683],"fontSize":22,"weight":500,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.4},{"role":"code","lines":["2 EB"],"x":562.140625,"baselines":[683],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":16.8},{"role":"num","lines":["02"],"x":615.859375,"baselines":[683],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":21.599999999999998}]},{"baseName":"North 03","groups":[{"role":"num","lines":["03"],"x":1250,"baselines":[399],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Mental body"],"x":1294,"baselines":[399],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["3 MB"],"x":1469.953125,"baselines":[399],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["The information carrier: memory and perception."],"x":1294,"baselines":[434],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"South 03","groups":[{"role":"name","lines":["Mental body"],"x":409.890625,"baselines":[763],"fontSize":22,"weight":500,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.4},{"role":"code","lines":["3 MB"],"x":557.921875,"baselines":[763],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":16.8},{"role":"num","lines":["03"],"x":615.390625,"baselines":[763],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":21.599999999999998}]},{"baseName":"North 04","groups":[{"role":"num","lines":["04"],"x":1250,"baselines":[321],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Intuitive body"],"x":1294,"baselines":[321],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["4 IB"],"x":1486.578125,"baselines":[321],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["Beyond language and analysis."],"x":1294,"baselines":[356],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"South 04","groups":[{"role":"name","lines":["Intuitive body"],"x":405.140625,"baselines":[841],"fontSize":22,"weight":500,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.4},{"role":"code","lines":["4 IB"],"x":566.078125,"baselines":[841],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":16.8},{"role":"num","lines":["04"],"x":614.90625,"baselines":[841],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":21.599999999999998}]},{"baseName":"North 05","groups":[{"role":"num","lines":["05"],"x":1250,"baselines":[243],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Spiritual dimension"],"x":1294,"baselines":[243],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["5 SB"],"x":1554.671875,"baselines":[243],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["The innermost core of the self."],"x":1294,"baselines":[278],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"South 05","groups":[{"role":"name","lines":["Spiritual dimension"],"x":344.8125,"baselines":[919],"fontSize":22,"weight":500,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.4},{"role":"code","lines":["5 SB"],"x":561.390625,"baselines":[919],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":16.8},{"role":"num","lines":["05"],"x":615.015625,"baselines":[919],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.5450980392156862,0.6392156862745098],"a":1},"leading":21.599999999999998}]},{"baseName":"Footer left","groups":[{"role":"span","lines":["POLARITY MODEL \u00b7 DIETRICH KLINGHARDT, M.D., PH.D."],"x":120,"baselines":[1032],"fontSize":13,"weight":500,"family":"sans","tracking":140,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":15.6}]},{"baseName":"Footer right","groups":[{"role":"span","lines":["EMOTIONAL BODY = LEVELS 1\u20133 \u00b7 SOUL = LEVELS 2\u20134"],"x":1390.46875,"baselines":[1032],"fontSize":13,"weight":500,"family":"sans","tracking":140,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":15.6}]}],"footerRule":{"type":"shape","name":"Footer rule","kind":"path","closed":false,"points":[[120,1000.5],[1800,1000.5]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.22,"width":1}},"referenceFile":"five-levels-poles-reference.png"};

// true  = headline in Kalice (brand guide), if installed
// false = headline in Newsreader Op72, exactly as in the approved PNG
var USE_KALICE = true;

var S = 2;                       // layout is in 1920x1080 units, comp is 3840x2160
var COMP_NAME = LAYOUT.compName || "The 5 levels of healing \u2014 system model";
var FPS = 30;
var DURATION = 10;

var NAVY = [2 / 255, 56 / 255, 102 / 255];
var GOLD = [247 / 255, 155 / 255, 9 / 255];
var HAZE = [130 / 255, 185 / 255, 215 / 255];

// PostScript names to try, in order.
var KALICE = { family: "Kalice", light: ["Kalice-Light", "KaliceLight"], highlight: ["Kalice-Bold", "KaliceBold"] };
var NEWSREADER = { family: "Newsreader",
    light: ["NewsreaderOp72-Light", "Newsreader72pt-Light", "Newsreader-Light", "NewsreaderRoman-Light"],
    highlight: ["NewsreaderOp72-Regular", "Newsreader72pt-Regular", "Newsreader-Regular", "NewsreaderRoman-Regular"] };
var GEORGIA = { family: "Georgia", light: ["Georgia"], highlight: ["Georgia-Bold"] };
var SERIF_SETS = USE_KALICE ? [KALICE, NEWSREADER, GEORGIA] : [NEWSREADER, KALICE, GEORGIA];

var WEIGHT_NAMES = { 300: "Light", 400: "Regular", 500: "Medium", 700: "Bold" };
var SANS_FALLBACK = {
    400: ["DMSans-Regular", "DMSans18pt-Regular", "ArialMT"],
    500: ["DMSans-Medium", "DMSans18pt-Medium", "Arial-BoldMT"],
    700: ["DMSans-Bold", "DMSans18pt-Bold", "Arial-BoldMT"]
};
// Exact optical-size cut first (fonts/ folder), then stock DM Sans
function sansCandidates(size, weight) {
    return ["DMSansOp" + size + "-" + WEIGHT_NAMES[weight]].concat(SANS_FALLBACK[weight]);
}

var report = [];

// ---------------------------------------------------------------- fonts

var fontCache = {};

function fontInstalled(ps) {
    if (app.fonts && typeof app.fonts.getFontsByPostScriptName === "function") {
        var found = app.fonts.getFontsByPostScriptName(ps);
        return found && found.length > 0;
    }
    return null; // unknown on AE before 24.0
}

// Returns the first candidate AE accepts. Uses app.fonts on AE 24+, otherwise sets the
// font on a scratch text layer and reads it back.
function resolveFont(comp, candidates) {
    var key = candidates.join("|");
    if (fontCache.hasOwnProperty(key)) return fontCache[key];
    var i, chosen = null;
    var known = fontInstalled(candidates[0]);
    if (known !== null) {
        for (i = 0; i < candidates.length; i++) {
            if (fontInstalled(candidates[i])) { chosen = candidates[i]; break; }
        }
    } else {
        var probe = comp.layers.addText("probe");
        var tp = probe.property("ADBE Text Properties").property("ADBE Text Document");
        for (i = 0; i < candidates.length && !chosen; i++) {
            try {
                var td = tp.value;
                td.font = candidates[i];
                tp.setValue(td);
                if (tp.value.font === candidates[i]) chosen = candidates[i];
            } catch (e) {}
        }
        probe.remove();
    }
    if (!chosen) chosen = candidates[candidates.length - 1];
    fontCache[key] = chosen;
    return chosen;
}

function resolveSerif(comp) {
    for (var i = 0; i < SERIF_SETS.length; i++) {
        var set = SERIF_SETS[i];
        var light = resolveFont(comp, set.light.concat(["__none__"]));
        if (light !== "__none__") {
            var hi = resolveFont(comp, set.highlight.concat([light]));
            return { family: set.family, light: light, highlight: hi };
        }
    }
    return { family: "Georgia", light: "Georgia", highlight: "Georgia-Bold" };
}

// ---------------------------------------------------------------- helpers

function sc(p) { return [p[0] * S, p[1] * S]; }

function xform(layer) { return layer.property("ADBE Transform Group"); }

function setAnchorAndPosition(layer, pt) {
    xform(layer).property("ADBE Anchor Point").setValue([0, 0]);
    xform(layer).property("ADBE Position").setValue(pt);
}

function bboxCenter(items) {
    var minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9, i, j, p;
    for (i = 0; i < items.length; i++) {
        var it = items[i];
        var pts = it.kind === "ellipse"
            ? [[it.center[0] - it.radius[0], it.center[1] - it.radius[1]], [it.center[0] + it.radius[0], it.center[1] + it.radius[1]]]
            : it.points;
        for (j = 0; j < pts.length; j++) {
            p = pts[j];
            if (p[0] < minX) minX = p[0]; if (p[0] > maxX) maxX = p[0];
            if (p[1] < minY) minY = p[1]; if (p[1] > maxY) maxY = p[1];
        }
    }
    return [(minX + maxX) / 2 * S, (minY + maxY) / 2 * S];
}

// items are in paint order (first = bottom). AE draws the first group in the stack on top,
// so groups are added from the last item to the first.
function addShapeLayer(comp, name, items) {
    var layer = comp.layers.addShape();
    layer.name = name;
    var origin = bboxCenter(items);
    setAnchorAndPosition(layer, origin);

    for (var i = items.length - 1; i >= 0; i--) {
        var it = items[i];
        var root = layer.property("ADBE Root Vectors Group");
        var grp = root.addProperty("ADBE Vector Group");
        grp.name = it.name;
        var gi = root.numProperties;
        var vec = function () { return layer.property("ADBE Root Vectors Group").property(gi).property("ADBE Vectors Group"); };

        if (it.kind === "ellipse") {
            var el = vec().addProperty("ADBE Vector Shape - Ellipse");
            el.property("ADBE Vector Ellipse Size").setValue([it.radius[0] * 2 * S, it.radius[1] * 2 * S]);
            el.property("ADBE Vector Ellipse Position").setValue([it.center[0] * S - origin[0], it.center[1] * S - origin[1]]);
        } else {
            var verts = [];
            for (var k = 0; k < it.points.length; k++) {
                verts.push([it.points[k][0] * S - origin[0], it.points[k][1] * S - origin[1]]);
            }
            var shp = new Shape();
            shp.vertices = verts;
            shp.closed = it.closed;
            var pg = vec().addProperty("ADBE Vector Shape - Group");
            pg.name = "Path";
            pg.property("ADBE Vector Shape").setValue(shp);
        }
        // SVG paints stroke over fill: in AE the stroke must sit above the fill in the group
        if (it.stroke) {
            var st = vec().addProperty("ADBE Vector Graphic - Stroke");
            st.property("ADBE Vector Stroke Color").setValue(it.stroke.rgb);
            st.property("ADBE Vector Stroke Opacity").setValue(it.stroke.opacity * 100);
            st.property("ADBE Vector Stroke Width").setValue(it.stroke.width * S);
        }
        if (it.fill) {
            var fl = vec().addProperty("ADBE Vector Graphic - Fill");
            fl.property("ADBE Vector Fill Color").setValue(it.fill.rgb);
            fl.property("ADBE Vector Fill Opacity").setValue(it.fill.opacity * 100);
        }
    }
    return layer;
}

function addText(comp, name, lines, o) {
    var str = lines.join("\r");
    var layer = comp.layers.addText(str);
    layer.name = name;
    var tp = layer.property("ADBE Text Properties").property("ADBE Text Document");
    var td = tp.value;
    try { td.resetCharStyle(); } catch (e1) {}
    try { td.resetParagraphStyle(); } catch (e2) {}
    td.text = str;
    td.font = o.font;
    td.fontSize = o.size * S;
    td.applyFill = true;
    td.fillColor = o.color;
    td.applyStroke = false;
    td.tracking = Math.round(o.tracking);
    td.justification = ParagraphJustification.LEFT_JUSTIFY;
    if (lines.length > 1) {
        try { td.autoLeading = false; } catch (e3) {}
        td.leading = o.leading * S;
    }
    tp.setValue(td);
    setAnchorAndPosition(layer, [o.x * S, o.y * S]);
    if (o.rotation) xform(layer).property("ADBE Rotate Z").setValue(o.rotation);
    if (o.opacity !== undefined && o.opacity < 1) xform(layer).property("ADBE Opacity").setValue(o.opacity * 100);
    return layer;
}

// Signature-gradient atmosphere: a coloured solid shown through a radial luma matte.
// Reproduces CSS radial-gradient(<rx> <ry> at <cx> <cy>, color a, transparent <stop>).
function addGlow(comp, folder, name, color, alpha, center, radius) {
    var w = comp.width, h = comp.height;
    var fill = comp.layers.addSolid(color, name, w, h, 1, comp.duration);
    fill.source.parentFolder = folder;
    xform(fill).property("ADBE Opacity").setValue(alpha * 100);

    var rx = radius[0] * S, ry = radius[1] * S;
    var side = Math.ceil(rx * 2) + 4;
    var matte = comp.layers.addSolid([0, 0, 0], name + " matte", side, side, 1, comp.duration);
    matte.source.parentFolder = folder;
    var ramp = matte.property("ADBE Effect Parade").addProperty("ADBE Ramp");
    ramp.property("ADBE Ramp-0001").setValue([side / 2, side / 2]);
    ramp.property("ADBE Ramp-0002").setValue([1, 1, 1]);
    ramp.property("ADBE Ramp-0003").setValue([side / 2 + rx, side / 2]);
    ramp.property("ADBE Ramp-0004").setValue([0, 0, 0]);
    ramp.property("ADBE Ramp-0005").setValue(2); // radial
    xform(matte).property("ADBE Anchor Point").setValue([side / 2, side / 2]);
    xform(matte).property("ADBE Position").setValue([center[0] * S, center[1] * S]);
    xform(matte).property("ADBE Scale").setValue([100, ry / rx * 100]);

    if (typeof fill.setTrackMatte === "function") {
        fill.setTrackMatte(matte, TrackMatteType.LUMA);
    } else {
        fill.trackMatteType = TrackMatteType.LUMA; // matte sits directly above
    }
    matte.enabled = false;
    return fill;
}

// ---------------------------------------------------------------- build

app.beginUndoGroup("Build: The 5 levels of healing");

var proj = app.project || app.newProject();
var folder = proj.items.addFolder("The 5 levels of healing");
var solids = proj.items.addFolder("Solids");
solids.parentFolder = folder;

var comp = proj.items.addComp(COMP_NAME, LAYOUT.width * S, LAYOUT.height * S, 1, DURATION, FPS);
comp.parentFolder = folder;
var BG = LAYOUT.bg || NAVY;
comp.bgColor = BG;

var serif = resolveSerif(comp);
report.push("Headline: " + serif.light + " / " + serif.highlight);
var sansUsed = {};

// Background + atmosphere (matches body.navy::before)
var bg = comp.layers.addSolid(BG, "Background \u2014 Navy #023866", comp.width, comp.height, 1, comp.duration);
bg.source.parentFolder = solids;
// Glows in paint order (first = lowest). Defaults reproduce the System model slide.
var GLOWS = LAYOUT.glows && LAYOUT.glows.length ? LAYOUT.glows : [
    { name: "Atmosphere \u2014 sky haze", color: HAZE, alpha: 0.22, center: [768, 756], radius: [1728 * 0.7, 540 * 0.7] },
    { name: "Atmosphere \u2014 gold base", color: GOLD, alpha: 0.30, center: [576, 1274.4], radius: [2304 * 0.6, 648 * 0.6] }
];
for (var gi = 0; gi < GLOWS.length; gi++) {
    addGlow(comp, solids, GLOWS[gi].name, GLOWS[gi].color, GLOWS[gi].alpha, GLOWS[gi].center, GLOWS[gi].radius);
}

function sansOpts(r) {
    var f = resolveFont(comp, sansCandidates(r.fontSize, r.weight));
    if (!sansUsed[f]) { sansUsed[f] = true; report.push("Text: " + f); }
    return {
        font: f,
        size: r.fontSize, tracking: r.tracking, color: r.color.rgb, opacity: r.color.a
    };
}

// Diagram shapes and SVG labels, in paint order
var i, s;
for (i = 0; i < LAYOUT.shapes.length; i++) {
    s = LAYOUT.shapes[i];
    if (s.type === "plate") {
        // Faces (and, for the wireframe level, its grid lines) as named groups of one layer
        var parts = s.faces.slice(0);
        for (var gl = 0; gl < s.gridLines.length; gl++) {
            var line = s.gridLines[gl];
            line.name = "Grid line " + (gl < 9 ? "0" : "") + (gl + 1);
            parts.push(line);
        }
        addShapeLayer(comp, s.name, parts);
    } else if (s.type === "text") {
        var r = s.runs[0];
        var o = sansOpts(r);
        o.x = r.x; o.y = r.y; o.rotation = r.rotation;
        addText(comp, s.name, [r.text], o);
    } else {
        var layer = addShapeLayer(comp, s.name, [s]);
        if (s.blurSigma) {
            var blur = layer.property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2");
            // AE blurriness \u2248 sigma / 0.3
            blur.property("ADBE Gaussian Blur 2-0001").setValue(s.blurSigma * S / 0.3);
        }
    }
}

addShapeLayer(comp, LAYOUT.footerRule.name, [LAYOUT.footerRule]);

// HTML copy: eyebrow, headline, level labels, footer
for (i = 0; i < LAYOUT.html.length; i++) {
    var block = LAYOUT.html[i];
    var g, j;
    if (block.baseName === "Headline") {
        var a = block.groups[0], b = block.groups[1];
        var full = a.lines[0] + " " + b.lines[0];
        var hl = addText(comp, "Headline", [full], {
            font: serif.light, size: a.fontSize, tracking: a.tracking, color: a.color.rgb, x: a.x, y: a.baselines[0]
        });
        var tp = hl.property("ADBE Text Properties").property("ADBE Text Document");
        var td = tp.value;
        if (typeof td.characterRange === "function") {
            // AE 24.3+: one editable layer, highlight word in the bold cut
            var rng = td.characterRange(full.length - b.lines[0].length, full.length);
            rng.font = serif.highlight;
            tp.setValue(td);
        } else {
            // Older AE: highlight word as its own layer, placed after the light run
            td.text = a.lines[0];
            tp.setValue(td);
            hl.name = "Headline";
            var probe = addText(comp, "probe", [a.lines[0] + " " + b.lines[0].charAt(0)], {
                font: serif.light, size: a.fontSize, tracking: a.tracking, color: a.color.rgb, x: 0, y: 0
            });
            var probeChar = addText(comp, "probe", [b.lines[0].charAt(0)], {
                font: serif.light, size: a.fontSize, tracking: a.tracking, color: a.color.rgb, x: 0, y: 0
            });
            var r1 = probe.sourceRectAtTime(0, false), r2 = probeChar.sourceRectAtTime(0, false);
            var advance = (r1.left + r1.width) - (r2.left + r2.width);
            probe.remove(); probeChar.remove();
            addText(comp, "Headline \u2014 highlight", [b.lines[0]], {
                font: serif.highlight, size: b.fontSize, tracking: b.tracking, color: b.color.rgb,
                x: a.x + advance / S, y: b.baselines[0]
            });
        }
        continue;
    }
    for (j = 0; j < block.groups.length; j++) {
        g = block.groups[j];
        var opts = sansOpts(g);
        opts.x = g.x; opts.y = g.baselines[0]; opts.leading = g.leading;
        var nm = block.baseName;
        if (block.groups.length > 1) {
            nm += " \u2014 " + ({ num: "number", name: "name", code: "code", p: "description" }[g.role] || g.role);
        }
        addText(comp, nm, g.lines, opts);
    }
}

// Reference image as a hidden guide layer, for checking the rebuild against the approved PNG
try {
    var refFile = new File(File($.fileName).parent.fsName + "/" + (LAYOUT.referenceFile || "five-levels-navy-reference.png"));
    if (refFile.exists) {
        var refItem = proj.importFile(new ImportOptions(refFile));
        refItem.parentFolder = folder;
        var ref = comp.layers.add(refItem);
        ref.name = "REFERENCE \u2014 approved PNG (guide)";
        ref.guideLayer = true;
        ref.enabled = false;
        xform(ref).property("ADBE Opacity").setValue(50);
        report.push("Reference PNG added as a hidden guide layer (top of the stack).");
    }
} catch (eRef) {}

comp.openInViewer();
app.endUndoGroup();

var missing = [];
for (var fu in sansUsed) if (sansUsed.hasOwnProperty(fu) && fu.indexOf("DMSansOp") !== 0) missing.push(fu);
if (missing.length) report.push("\nWARNING: some text fell back from the exact DM Sans cuts. Install the fonts/ folder for a 1:1 match.");

alert("Built \"" + COMP_NAME + "\" (" + comp.numLayers + " layers).\n\n" + report.join("\n") +
      (USE_KALICE && serif.family !== "Kalice" ? "\n\nKalice is not installed, so the headline uses " + serif.family + " (as in the approved PNG). Install Kalice and re-run to match the brand guide." : ""));

}());
