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

var LAYOUT = {"width":1920,"height":1080,"shapes":[{"type":"shape","name":"Grid 01","kind":"path","closed":false,"points":[[160,270],[160,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 02","kind":"path","closed":false,"points":[[250,270],[250,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 03","kind":"path","closed":false,"points":[[340,270],[340,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 04","kind":"path","closed":false,"points":[[430,270],[430,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 05","kind":"path","closed":false,"points":[[520,270],[520,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 06","kind":"path","closed":false,"points":[[610,270],[610,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 07","kind":"path","closed":false,"points":[[700,270],[700,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 08","kind":"path","closed":false,"points":[[790,270],[790,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 09","kind":"path","closed":false,"points":[[880,270],[880,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 10","kind":"path","closed":false,"points":[[970,270],[970,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 11","kind":"path","closed":false,"points":[[1060,270],[1060,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 12","kind":"path","closed":false,"points":[[1150,270],[1150,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Grid 13","kind":"path","closed":false,"points":[[1240,270],[1240,960]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.06,"width":1}},{"type":"shape","name":"Stack shadow","kind":"ellipse","center":[700,977],"radius":[180,22],"fill":{"rgb":[0,0,0],"opacity":0.35},"stroke":null,"blurSigma":18},{"type":"shape","name":"Axis line","kind":"path","closed":false,"points":[[170,860],[170,322]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis arrowhead","kind":"path","closed":false,"points":[[164,328],[170,312],[176,328]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis tick 01","kind":"path","closed":false,"points":[[162,800],[178,800]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis tick 02","kind":"path","closed":false,"points":[[162,688],[178,688]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis tick 03","kind":"path","closed":false,"points":[[162,576],[178,576]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis tick 04","kind":"path","closed":false,"points":[[162,464],[178,464]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"shape","name":"Axis tick 05","kind":"path","closed":false,"points":[[162,352],[178,352]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.75,"width":1.5}},{"type":"text","name":"Label SUBJECTIVE","runs":[{"text":"SUBJECTIVE","x":120.0859375,"y":290,"rotation":0,"fontSize":14,"weight":500,"family":"sans","tracking":139.99999999999997,"color":{"rgb":[1,1,1],"a":1}}]},{"type":"text","name":"Label OBJECTIVE","runs":[{"text":"OBJECTIVE","x":124.390625,"y":896,"rotation":0,"fontSize":14,"weight":500,"family":"sans","tracking":139.99999999999997,"color":{"rgb":[1,1,1],"a":1}}]},{"type":"plate","name":"Plate 01 Physical body","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[500,800],[700,915],[700,955],[500,840]],"fill":{"rgb":[0.8352941176470589,0.8705882352941177,0.8901960784313725],"opacity":1},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[700,915],[900,800],[900,840],[700,955]],"fill":{"rgb":[0.7254901960784313,0.7803921568627451,0.8117647058823529],"opacity":1},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[700,685],[900,800],[700,915],[500,800]],"fill":{"rgb":[0.9450980392156862,0.9568627450980393,0.9568627450980393],"opacity":1},"stroke":{"rgb":[0.9450980392156862,0.9568627450980393,0.9568627450980393],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 01 Physical body","kind":"path","closed":false,"points":[[906,800],[1150,800]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 01 Physical body","kind":"ellipse","center":[900,800],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 02 Energy body","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[500,688],[700,803],[700,819],[500,704]],"fill":{"rgb":[0.7490196078431373,0.8392156862745098,0.8823529411764706],"opacity":0.87},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[700,803],[900,688],[900,704],[700,819]],"fill":{"rgb":[0.6431372549019608,0.7607843137254902,0.8156862745098039],"opacity":0.87},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[700,573],[900,688],[700,803],[500,688]],"fill":{"rgb":[0.8666666666666667,0.9215686274509803,0.9450980392156862],"opacity":0.72},"stroke":{"rgb":[0.8666666666666667,0.9215686274509803,0.9450980392156862],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 02 Energy body","kind":"path","closed":false,"points":[[906,688],[1150,688]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 02 Energy body","kind":"ellipse","center":[900,688],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 03 Mental body","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[500,576],[700,691],[700,705],[500,590]],"fill":{"rgb":[0.09019607843137255,0.5058823529411764,0.5176470588235295],"opacity":0.75},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[700,691],[900,576],[900,590],[700,705]],"fill":{"rgb":[0.07058823529411765,0.41568627450980394,0.4235294117647059],"opacity":0.75},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[700,461],[900,576],[700,691],[500,576]],"fill":{"rgb":[0.11764705882352941,0.615686274509804,0.6313725490196078],"opacity":0.6},"stroke":{"rgb":[0.37254901960784315,0.7686274509803922,0.7803921568627451],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 03 Mental body","kind":"path","closed":false,"points":[[906,576],[1150,576]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 03 Mental body","kind":"ellipse","center":[900,576],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 04 Intuitive body","faces":[{"name":"Left side","kind":"path","closed":true,"points":[[500,464],[700,579],[700,591],[500,476]],"fill":{"rgb":[0.5254901960784314,0.7254901960784313,0.807843137254902],"opacity":0.5},"stroke":null},{"name":"Right side","kind":"path","closed":true,"points":[[700,579],[900,464],[900,476],[700,591]],"fill":{"rgb":[0.43529411764705883,0.6509803921568628,0.7450980392156863],"opacity":0.5},"stroke":null},{"name":"Top face","kind":"path","closed":true,"points":[[700,349],[900,464],[700,579],[500,464]],"fill":{"rgb":[0.611764705882353,0.796078431372549,0.8784313725490196],"opacity":0.35},"stroke":{"rgb":[0.6627450980392157,0.8392156862745098,0.9176470588235294],"opacity":0.9,"width":1.2}}],"gridLines":[]},{"type":"shape","name":"Leader 04 Intuitive body","kind":"path","closed":false,"points":[[906,464],[1150,464]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 04 Intuitive body","kind":"ellipse","center":[900,464],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"plate","name":"Plate 05 Spiritual dimension","faces":[{"name":"Top face","kind":"path","closed":true,"points":[[700,237],[900,352],[700,467],[500,352]],"fill":{"rgb":[1,1,1],"opacity":0.12},"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.9,"width":1.2}}],"gridLines":[{"name":"Grid line","kind":"path","closed":false,"points":[[520,340.5],[720,455.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[520,363.5],[720,248.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[540,329],[740,444]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[540,375],[740,260]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[560,317.5],[760,432.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[560,386.5],[760,271.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[580,306],[780,421]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[580,398],[780,283]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[600,294.5],[800,409.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[600,409.5],[800,294.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[620,283],[820,398]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[620,421],[820,306]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[640,271.5],[840,386.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[640,432.5],[840,317.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[660,260],[860,375]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[660,444],[860,329]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[680,248.5],[880,363.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}},{"name":"Grid line","kind":"path","closed":false,"points":[[680,455.5],[880,340.5]],"fill":null,"stroke":{"rgb":[0.8117647058823529,0.9019607843137255,0.9450980392156862],"opacity":0.7,"width":0.8}}]},{"type":"shape","name":"Leader 05 Spiritual dimension","kind":"path","closed":false,"points":[[906,352],[1150,352]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.55,"width":1}},{"type":"shape","name":"Dot 05 Spiritual dimension","kind":"ellipse","center":[900,352],"radius":[5,5],"fill":{"rgb":[0.9686274509803922,0.6078431372549019,0.03529411764705882],"opacity":1},"stroke":null},{"type":"shape","name":"Bracket Emotional body","kind":"path","closed":false,"points":[[1690,550],[1700,550],[1700,826],[1690,826]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.6,"width":1.2}},{"type":"text","name":"Label EMOTIONAL BODY","runs":[{"text":"EMOTIONAL BODY","x":1726,"y":614.2578125,"rotation":90,"fontSize":14,"weight":500,"family":"sans","tracking":139.99999999999997,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1}}]},{"type":"shape","name":"Bracket Soul","kind":"path","closed":false,"points":[[1760,438],[1770,438],[1770,714],[1760,714]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.6,"width":1.2}},{"type":"text","name":"Label SOUL","runs":[{"text":"SOUL","x":1796,"y":554.1171875,"rotation":90,"fontSize":14,"weight":500,"family":"sans","tracking":139.99999999999997,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1}}]}],"html":[{"baseName":"Eyebrow","groups":[{"role":"eyebrow","lines":["SYSTEM MODEL"],"x":120,"baselines":[111],"fontSize":15,"weight":500,"family":"sans","tracking":140,"color":{"rgb":[1,1,1],"a":1},"leading":18}]},{"baseName":"Headline","groups":[{"role":"h1","lines":["The 5 levels of"],"x":120,"baselines":[180],"fontSize":72,"weight":300,"family":"serif","tracking":-15.000000000000002,"color":{"rgb":[1,1,1],"a":1},"leading":75.6},{"role":"b","lines":["healing"],"x":573.625,"baselines":[180],"fontSize":72,"weight":400,"family":"serif","tracking":-15.000000000000002,"color":{"rgb":[1,1,1],"a":1},"leading":75.6}]},{"baseName":"Level 01","groups":[{"role":"num","lines":["01"],"x":1180,"baselines":[804],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Physical body"],"x":1224,"baselines":[804],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["1 PB"],"x":1417.046875,"baselines":[804],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["The densest level, governed by mechanics,","chemistry and physics."],"x":1224,"baselines":[839,865.1],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"Level 02","groups":[{"role":"num","lines":["02"],"x":1180,"baselines":[692],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Energy body"],"x":1224,"baselines":[692],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["2 EB"],"x":1400.265625,"baselines":[692],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["The link between mind and body \u2014 the level of","biophysics."],"x":1224,"baselines":[727,753.1],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"Level 03","groups":[{"role":"num","lines":["03"],"x":1180,"baselines":[580],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Mental body"],"x":1224,"baselines":[580],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["3 MB"],"x":1399.953125,"baselines":[580],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["The information carrier: stores memories and","interprets perceptions."],"x":1224,"baselines":[615,641.1],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"Level 04","groups":[{"role":"num","lines":["04"],"x":1180,"baselines":[468],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Intuitive body"],"x":1224,"baselines":[468],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["4 IB"],"x":1416.578125,"baselines":[468],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["Sensed beyond language and analysis; shaped by","family history and transpersonal forces."],"x":1224,"baselines":[503,529.1],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"Level 05","groups":[{"role":"num","lines":["05"],"x":1180,"baselines":[356],"fontSize":18,"weight":500,"family":"sans","tracking":40,"color":{"rgb":[0.43529411764705883,0.8156862745098039,0.8274509803921568],"a":1},"leading":21.599999999999998},{"role":"name","lines":["Spiritual dimension"],"x":1224,"baselines":[356],"fontSize":26,"weight":700,"family":"sans","tracking":0,"color":{"rgb":[1,1,1],"a":1},"leading":31.2},{"role":"code","lines":["5 SB"],"x":1484.671875,"baselines":[356],"fontSize":14,"weight":500,"family":"sans","tracking":99.99999999999999,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":16.8},{"role":"p","lines":["The innermost core of the self."],"x":1224,"baselines":[391],"fontSize":18,"weight":400,"family":"sans","tracking":0,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":26.1}]},{"baseName":"Footer left","groups":[{"role":"span","lines":["FIVE LEVELS MODEL \u00b7 DIETRICH KLINGHARDT, M.D., PH.D."],"x":120,"baselines":[1032],"fontSize":13,"weight":500,"family":"sans","tracking":140,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":15.6}]},{"baseName":"Footer right","groups":[{"role":"span","lines":["EMOTIONAL BODY = LEVELS 1\u20133 \u00b7 SOUL = LEVELS 2\u20134"],"x":1390.46875,"baselines":[1032],"fontSize":13,"weight":500,"family":"sans","tracking":140,"color":{"rgb":[0.6627450980392157,0.7686274509803922,0.8392156862745098],"a":1},"leading":15.6}]}],"footerRule":{"type":"shape","name":"Footer rule","kind":"path","closed":false,"points":[[120,1000.5],[1800,1000.5]],"fill":null,"stroke":{"rgb":[1,1,1],"opacity":0.22,"width":1}}};

// true  = headline in Kalice (brand guide), if installed
// false = headline in Newsreader Op72, exactly as in the approved PNG
var USE_KALICE = true;

var S = 2;                       // layout is in 1920x1080 units, comp is 3840x2160
var COMP_NAME = "The 5 levels of healing \u2014 System model";
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
comp.bgColor = NAVY;

var serif = resolveSerif(comp);
report.push("Headline: " + serif.light + " / " + serif.highlight);
var sansUsed = {};

// Background + atmosphere (matches body.navy::before)
var bg = comp.layers.addSolid(NAVY, "Background \u2014 Navy #023866", comp.width, comp.height, 1, comp.duration);
bg.source.parentFolder = solids;
addGlow(comp, solids, "Atmosphere \u2014 sky haze", HAZE, 0.22, [768, 756], [1728 * 0.7, 540 * 0.7]);
addGlow(comp, solids, "Atmosphere \u2014 gold base", GOLD, 0.30, [576, 1274.4], [2304 * 0.6, 648 * 0.6]);

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
    var refFile = new File(File($.fileName).parent.fsName + "/five-levels-navy-reference.png");
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
