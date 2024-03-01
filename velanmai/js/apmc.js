function apmc(selectedValue) {


var odisha=`<select class="od" name="apmcplace" id="fin"  onchange="getComboA(this)">
<option value="currentGPS">ଚୟନ କରନ୍ତୁ (ସାମ୍ପ୍ରତିକ  Loc)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସରଗିପାଲି</font></font></option>
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାଇରଙ୍ଗପୁର</font></font></option>
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାଇରାଖୋଲ |</font></font></option>
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାଟନଗର</font></font></option>
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନୀଳଗିରି</font></font></option>
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମୁଖିଗୁଦା |</font></font></option>
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଖରିଆର ରୋଡ୍ |</font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କେଓନହାର </font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜୁନାଗଡ |</font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚମ୍ପୁଆ |</font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାଲାଙ୍ଗୀର</font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବିରମହାରାଜପୁର</font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଉଦଲା | </font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଟିକାବାଲି |</font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ତାଲଚର୍ |</font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସମ୍ବଲପୁର</font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାହିଗୋପାଲ</font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାୟାଗଡା </font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାହାମା</font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାରାଲାଖେମୁଣ୍ଡି |</font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାନପୋଶ୍ |</font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାଲ୍ଲାହାରା |</font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପଦ୍ମପୁର ଓଡି</font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ନିମପାରା</font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନବରଙ୍ଗପୁର</font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମାଲକାନଗିରି |</font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୁଚିଣ୍ଡା</font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୋରାପୁଟ |</font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କେସିଙ୍ଗା |</font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କେନ୍ଦୁ up ର</font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କେନ୍ଦ୍ରାପଡା |</font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କରଞ୍ଜିଆ |</font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କଣ୍ଟାବାଞ୍ଜୀ |</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାନ୍ଧମାଲ</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାମାଖନଗର</font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hs ାରସୁଗୁଡା</font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜେପୋର |</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜାଟାନି</font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜଲେଶ୍ୱର |</font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜଜପୁର</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜଗତ୍ସିଂହପୁର |</font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହିଞ୍ଜିଲିକଟ୍ |</font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହିନ୍ଦୋଲ |</font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗୁନୁପୁର |</font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଡୁଙ୍ଗୁରିପାଲି |</font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଦିଗାପାଣ୍ଡି |</font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଧନକାନାଲ</font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଦେଓଗଡ</font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚାନ୍ଦବାଲି |</font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ବ ud ଦ</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବୋନାଇ |</font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭବାନୀପାଟଣା </font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭଞ୍ଜାନଗର</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭଦ୍ରାକ୍</font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବେଟନୋଟି |</font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବରିପଡା |</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବରଗଡ |</font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାଙ୍କି</font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାଲୁଗାଓଁ |</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାଲାସୋର |</font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାହାଦଜୋଲା |</font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅଟାବୀରା |</font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଥମାଲିକ୍ |</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅଙ୍ଗୁଲ |</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆନନ୍ଦପୁର</font></font></option>
</select>


<select class="en" name="apmcplace" id="fin" style="display:none"  onchange="getComboA(this)">
<option value="currentGPS">Select (Current Loc)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sargipali </font></font></option>
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rairangpur </font></font></option>
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rairakhol </font></font></option>
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Patnagarh </font></font></option>
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nilgiri </font></font></option>
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mukhiguda </font></font></option>
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Khariar_road </font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Keonjhar </font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">junagarh </font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Champua </font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Balangir </font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Biramaharajpur </font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Udala </font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tikabali </font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Talcher </font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sambalpur </font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sakhigopal </font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rayagada </font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rahama </font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Paralakhemundi </font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Panposh </font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pallahara </font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Padampur_od </font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nimapara </font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nabarangpur </font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Malkangiri </font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kuchinda </font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koraput </font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kesinga </font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kendupatna </font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kendrapara </font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Karanjia </font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kantabanji</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kandhamal</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kamakhyanagar </font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jharsuguda </font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jeypore</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jatni</font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jaleswar </font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jagatsinghpur</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jagatsinghpur </font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hinjilicut </font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hindol </font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gunupur </font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dunguripali </font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Digapahandi </font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dhenkanal </font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deogarh </font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chandbali </font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Boudh</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bonai </font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bhawanipatna</font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bhanjanagar</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bhadrak </font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Betnoti </font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Baripada</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bargarh </font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Banki </font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Balugaon</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Balasore </font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bahadajhola </font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Attabira </font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Athmallik</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angul</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anandapur</font></font></option>
</select>


<select class="ta" name="apmcplace" id="fin" style="display:none" onchange="getComboA(this)">
<option value="currentGPS">தேர்ந்தெடுக்கவும்(Current Loc)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">சர்கிபாலி</font></font></option>
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ரைரங்பூர் </font></font></option>
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ரைராகோல் </font></font></option>
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
பட்நாகர் </font></font></option>
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">நீலகிரி
 </font></font></option>
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">முகிகுடா </font></font></option>
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">காரியார் சாலை </font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
கியோஞ்சர் </font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஜூனகர் </font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">சம்புவா </font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பலங்கிர் </font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பிரமஹராஜ்பூர் </font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">உடலா </font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">திகாபலி </font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">டால்சர் </font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">சம்பல்பூர் </font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">சகிகோபால் </font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ராயகட </font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ரஹாமா </font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பரலகமுண்டி </font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பண்போஷ் </font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பல்லஹாரா </font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பதம்பூர்_ஓடி </font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">நிமபர </font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">நபரங்பூர் </font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">மல்கங்கிரி </font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">குச்சிந்தா </font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">கோராபுட் </font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">கேசிங்க </font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">கெந்துபட்னா </font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">கேந்திரபாரா </font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">கரஞ்சியா </font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">காந்தபாஞ்சி</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">கந்தமால்</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">காமக்யாநகர் </font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஜார்சுகுடா </font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
ஜெய்பூர்</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
ஜட்னி</font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
ஜலேஸ்வர் </font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஜகத்சிங்பூர்</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஜகத்சிங்பூர் </font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
ஹிஞ்சிலிகட் </font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஹிண்டோல் </font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">குணுபூர் </font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
டுங்குரிபாலி </font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
திகபஹண்டி </font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">தேன்கனல் </font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">தியோகார் </font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
சந்த்பாலி </font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பௌத்</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
போனாய் </font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பவானிபட்னா</font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பஞ்சாநகர்</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பத்ரக் </font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பெட்னோட்டி </font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பரிபாடா</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
பர்கர்ஹ் </font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
பாங்கி</font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பாலுகான்</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பாலசோர் </font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">பஹதாஜோலா </font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">அட்டாபிரா </font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஆத்மல்லிக்</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஆங்குல்</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ஆனந்தபூர்</font></font></option>
</select>


<select class="ml" name="apmcplace" id="fin" style="display:none" onchange="getComboA(this)">
<option value="currentGPS">തിരഞ്ഞെടുക്കുക(നിലവിലെ Loc)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സർഗിപാലി</font></font></option> -
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">റൈരംഗ്പൂർ</font></font></option> -
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">റൈറഖോൽ</font></font></option> -
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പട്‌നഗർ</font></font></option> -
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">നീലഗിരി</font></font></option> -
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മുഖിഗുഡ</font></font></option> -
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഖരിയാർ</font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കിയോഞ്ചാർ</font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ജുനഗർ</font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ചാമ്പുവ</font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബലംഗീർ</font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബിരാമഹരാജ്പൂർ</font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഉഡാല</font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ടിക്കബാലി</font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ടാൽചർ</font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സംബാൽപൂർ</font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സഖിഗോപാൽ</font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">റായഗഡ</font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">റഹാമ</font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പരലഖെമുണ്ടി</font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പാൻപോഷ്</font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പല്ലഹര</font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പദംപൂർ</font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">നിമപാറ</font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">നബരംഗ്പൂർ</font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മൽക്കൻഗിരി</font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കുചിന്ദ</font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കോരാപുത്</font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കെസിംഗ</font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കേന്ദുപത്ന</font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കേന്ദ്രപാര</font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കരഞ്ജിയ</font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കാന്തബഞ്ചി</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കന്ദമാൽ</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കാമാഖ്യാനഗർ</font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഝാർസുഗുഡ</font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ജെയ്പോർ</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ജത്നി</font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ജലേശ്വര്</font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ജജ്പൂർ</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ജഗത്സിംഗ്പൂർ</font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഹിഞ്ചിലികട്ട്</font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഹിന്ദോൾ</font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഗുണുപൂർ</font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ദുംഗുരിപാലി</font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ദിഗപഹന്ദി</font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ധേൻകനൽ</font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ദിയോഗർ</font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ചാന്ദ്ബാലി</font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബൗധ്</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബോണായി</font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഭവാനിപട്ന</font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഭഞ്ജനഗർ</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഭദ്രക്</font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബെറ്റ്നോട്ടി</font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബാരിപദ</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബാർഗഡ്</font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബാങ്കി</font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബാലുഗാവ്</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബാലസോർ</font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബഹദാജോല</font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അട്ടബിര</font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അഥ്മലിക്</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അംഗുൽ</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ആനന്ദപൂർ</font></font></option>
</select>


<select class="hi" name="apmcplace" id="fin" style="display:none" onchange="getComboA(this)">
<option value="currentGPS">चुनना ( मौजूदा  Loc)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सरगीपाली </font></font></option>
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायरंगपुर</font></font></option>
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायराखोल</font></font></option>
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पटनागढ़</font></font></option>
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नीलगिरि</font></font></option>
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुखीगुड़ा</font></font></option>
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खरियार रोड</font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">क्योंझर </font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जूनागढ़</font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चंपुआ</font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलांगीर</font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बिरमहाराजपुर</font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उदला</font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">टिकाबाली</font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तालचेर</font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संबलपुर</font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सखीगोपाल</font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायगड़ा </font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रहमा</font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पारलाखेमुंडी</font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पानपोष</font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पल्लाहारा</font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पदमपुर </font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  निमापारा</font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नबरंगपुर</font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मल्कानगिरी</font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुचिंडा</font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोरापुट</font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केसिंगा</font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केंदुपटना </font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केंद्रपाड़ा</font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">करंजिया</font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कांटाबांजी</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कंधमाल</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कमाख्यानगर</font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">झारसुगुड़ा </font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जयपोर</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जटनी </font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जलेश्वर</font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जाजपुर</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जगतसिंहपुर</font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हिंजिलिकट</font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हिंडोल</font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गुनुपुर</font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डुंगुरिपाली</font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डिगपहंडी</font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ढेंकनाल </font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">देवगढ़</font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चंदबली</font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बौध</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बोनाई</font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भवानीपटना</font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भंजनगर</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भद्रक</font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बेट्नोटी</font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बारीपदा</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बारगढ़</font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बांकी</font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बालूगांव</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बालासोर</font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहादाझोला</font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अट्टाबिरा</font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अथमल्लिक</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अंगुल</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आनंदपुर</font></font></option>
</select>



<select class="mr" name="apmcplace" id="fin" style="display:none" onchange="getComboA(this)">
<option value="currentGPS">निवडा ( चालू  Loc)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सरगीपाली</font></font></option>
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायरंगपूर</font></font></option>
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायराखोल</font></font></option>
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पटनागढ</font></font></option>
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">निलगिरी</font></font></option>
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुखीगुडा</font></font></option>
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खारीर रोड</font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केओंझार  </font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जुनागड</font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चंपुआ</font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बालंगीर</font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बिरमहाराजपूर</font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उडाला </font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">टिकाबळी</font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तालचेर</font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संबळपूर</font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सखीगोपाल </font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायगडा </font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रहमा</font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">परळखेमुंडी</font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पानपोश</font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पल्लहारा/font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पदमपूर </font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">निमापारा </font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नबरंगपूर</font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मलकानगिरी</font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुचिंदा</font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोरापुट</font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केसिंगा</font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केंदुपटना </font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केंद्रपारा</font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">करंज्या</font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कांताबंजी</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> कंधमाल</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कामाख्यानगर</font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">झारसुगुडा</font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जेपोर</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जातनी </font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जलेश्वर</font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जाजपूर</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जगतसिंगपूर</font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हिंजलीकट</font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हिंडोल</font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गुणुपूर</font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डुंगुरीपाली</font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">दिगपहांडी</font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ढेंकनाल </font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">देवगड</font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चांदाबली</font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बौध</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बोनाई</font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भवानीपत्ना</font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भंजननगर</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भद्रक</font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बेटनोटी</font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बारीपाडा</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बारगळ</font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बांकी </font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बाळुगाव</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बालासोर</font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहादझोला</font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अट्टाबिरा </font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अथमल्लिक</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अंगुल</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आनंदपूर</font></font></option>
</select>

<select class="te" name="apmcplace" id="fin" style="display:none" onchange="getComboA(this)">
<option value="currentGPS">సెలెక్ట్(ప్రస్తుత loc)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సర్గిపాలి</font></font></option>
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాయరంగపూర్</font></font></option>
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రైరాఖోల్</font></font></option>
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పట్నాగర్</font></font></option>
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నీలాగిరి</font></font></option>
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ముఖిగుడా</font></font></option>
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఖరియార్</font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కియోంఝర్</font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జునాఘర్</font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చంపువా</font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బలంగీర్</font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బరామహరాజ్పుర్</font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఊదల</font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తికబలి</font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తాల్చెర్</font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సంబల్పూర్</font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సఖిగోపాల్</font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాయగడ</font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రహమా</font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పరాళాఖెముందీ</font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పాన్పోష్</font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పల్లహారా</font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పదంపూర్</font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నిమపారా</font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నబరాంగ్పుర్</font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మల్కన్‌గిరి</font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కుచింద</font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కోరాపుట్</font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కేసింగ</font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కెండుపట్న</font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కేంద్రపారా</font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కరంజియా</font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కంటబంజి</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కంధమాల్</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కామాఖ్యనగర్</font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఝర్సుగూడ</font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జైపూర్</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జత్ని</font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జలేశ్వర్</font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జాజ్పూర్</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జగత్సింగ్పూర్</font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హింజిలికట్</font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హిందోల్</font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గునుపూర్</font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దుంగూరిపాలి</font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దిగపహండి</font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ధెంకనల్</font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దేవ్ గఢ్</font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చండబాలి</font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బౌధ్</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బోనై</font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">భవానీపట్న</font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">భంజనగర్</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">భద్రక్</font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బెట్నోటి</font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బరిపాద</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><బార్గర్/font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బన్కీ</font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బలుగావ్</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బాలసోర్</font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బహదాజోలా</font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అట్టాబీరా</font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అత్మల్లిక్</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అంగుల్</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆనందపూర్</font></font></option>
</select>


<select class="be" name="apmcplace" id="fin" style="display:none" onchange="getComboA(this)">
<option value="currentGPS">নির্বাচন করুন (বর্তমান লক)</option>
<option value="sargipali#21.4747#83.9591"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সারগিপালি</font></font></option>
<option value="rairangpur#22.2258#86.1819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রায়রংপুর</font></font></option>
<option value="rairakhol#21.6403#84.4482"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রায়রাখাল</font></font></option>
<option value="patnagarh#20.7163#83.1652"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পাটনাগড়</font></font></option>
<option value="nilgiri#21.4576#86.7321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নীলগিরি</font></font></option>
<option value="mukhiguda#20.4746#83.9568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মুখিগুড়া</font></font></option>
<option value="khariar_road#21.8578#83.2252"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">খরিয়ার রোড</font></font></option>
<option value="keonjhar#21.6350#85.5796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কেওনঝাড় </font></font></option>
<option value="junagarh#20.2089#82.6164"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জুনাগড় </font></font></option>
<option value="champua#22.0862#85.6417"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চম্পুয়া</font></font></option>
<option value="balangir#20.7141#83.1916"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বলাঙ্গির </font></font></option>
<option value="biramaharajpur#21.0259#83.6315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বীরমহারাজপুর</font></font></option>
<option value="udala#21.5286#86.7698"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">উদালা</font></font></option>
<option value="tikabali#19.7193#83.1664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">টিকাবালি</font></font></option>
<option value="talcher#20.9502#85.2308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তালচের</font></font></option>
<option value="sambalpur#21.4669#83.9756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সম্বলপুর</font></font></option>
<option value="sakhigopal#20.2186#85.7881"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সখিগোপাল</font></font></option>
<option value="rayagada#19.1664#83.4297"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রায়গদা</font></font></option>
<option value="rahama#21.8477#83.4731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রাহামা</font></font></option>
<option value="paralakhemundi#18.7805#84.0833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পারালাখেমুন্ডি</font></font></option>
<option value="panposh#22.0568#85.6487"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পানপোশ</font></font></option>
<option value="pallahara#21.5007#85.9997"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পাল্লাহারা</font></font></option>
<option value="padampur_od#20.9186#83.0760"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পদমপুর_ওড</font></font></option>
<option value="nimapara#20.4386#86.0972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নিমাপারা</font></font></option>
<option value="nabarangpur#19.2358#82.5475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নবরঙ্গপুর</font></font></option>
<option value="malkangiri#18.3575#81.8912"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মালকানগিরি</font></font></option>
<option value="kuchinda#21.7919#84.0747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কুচিন্দা</font></font></option>
<option value="koraput#18.8154#82.7237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কোরাপুট</font></font></option>
<option value="kesinga#20.1982#83.2236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কেসিঙ্গা</font></font></option>
<option value="kendupatna#20.6925#86.2765"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কেন্দ্রপাটনা</font></font></option>
<option value="kendrapara#20.5046#86.4320"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কেন্দ্রপাড়া</font></font></option>
<option value="karanjia#21.6501#85.9501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">করঞ্জিয়া</font></font></option>
<option value="kantabanji#20.4853#82.9096"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কান্তাবাঞ্জি</font></font></option>
<option value="kandhamal#20.2793#84.4303"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কান্ধামাল</font></font></option>
<option value="kamakhyanagar#20.9333#85.7833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কামাখ্যানগর</font></font></option>
<option value="jharsuguda#21.8658#84.0056"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ঝারসুগুড়া</font></font></option>
<option value="jeypore#18.8553#82.5717"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জয়পুর</font></font></option>
<option value="jatni#20.1694#85.7088"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জাটনি</font></font></option>
<option value="jaleswar#21.4858#87.0895"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জলেশ্বর</font></font></option>
<option value="jajpur#20.8547#86.3361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জাজপুর</font></font></option>
<option value="jagatsinghpur#20.2666#86.1726"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জগৎসিংহপুর</font></font></option>
<option value="hinjilicut#19.6111#84.7594"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হিনজিলিকুট</font></font></option>
<option value="hindol#20.4667#85.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হিন্দোল</font></font></option>
<option value="gunupur#19.0761#83.8154"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গুনুপুর</font></font></option>
<option value="dunguripali#20.8167#83.8333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ডুঙ্গুরিপালি</font></font></option>
<option value="digapahandi#19.2667#84.3000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">দিগাপাহান্দি</font></font></option>
<option value="dhenkanal#20.6667#85.6000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ঢেঙ্কানাল</font></font></option>
<option value="deogarh#21.5333#84.7333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">দেওগড়</font></font></option>
<option value="chandbali#20.8000#86.7667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চাঁদবালি</font></font></option>
<option value="boudh#20.8333#84.1833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বৌধ</font></font></option>
<option value="bonai#22.3800#84.0300"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বোনাই</font></font></option>
<option value="bhawanipatna#19.9000#83.1667"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভাওয়ানিপাটনা</font></font></option>
<option value="bhanjanagar#19.9333#84.5833"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভঞ্জনগর</font></font></option>
<option value="bhadrak#21.0517#86.4831"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভদ্রক</font></font></option>
<option value="betnoti#21.5444#86.7467"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বেটনোটি</font></font></option>
<option value="baripada#21.9373#86.7213"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বারিপদা</font></font></option>
<option value="bargarh#21.3333#83.6167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বারগড়</font></font></option>
<option value="banki#20.4964#85.8561"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বাঁকী</font></font></option>
<option value="balugaon#20.2667#85.5167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বালুগাঁও</font></font></option>
<option value="balasore#21.4927#86.9439"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বালাসোর</font></font></option>
<option value="bahadajhola#21.9300#86.2500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বাহাদঝোলা</font></font></option>
<option value="attabira#21.2500#83.1333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আত্তাবিরা</font></font></option>
<option value="athmallik#20.7167#84.5333"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আথমালিক</font></font></option>
<option value="angul#20.8400#85.1600"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আঙ্গুল</font></font></option>
<option value="anandapur#21.2022#86.0278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আনন্দপুর</font></font></option>
</select>
`;
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
var tamil_nadu=`<select class="ta" name="apmcplace" id="" onchange="getComboA(this)">
			<option value="currentGPS">தேர்ந்தெடுக்கவும் (Current Loc)</font></option>
			<option value="ALANGUDI#10.4593096#78.7027302"><font>ஆலங்குடி</font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font>அம்பாசமுத்திரம்</font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font>அம்மூர்</font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font>ஆனைமலை</font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font>அன்னூர்</font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font>அந்தியூர்</font></option>
			<option value="ARANI#12.6668202#79.2706576"><font>ஆரணி</font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font>அறந்தாங்கி</font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font>ஆற்காடு</font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font>அருப்புக்கோட்டை</font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font>ஆத்தூர்</font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font>அவல்பூந்துறை</font></option>
			<option value="AVALURPET#12.250306#79.416535"><font>அவலூர்பேட்டை</font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font>வத்தலகுண்டு</font></option>
			<option value="BHAVANI#11.450007#77.683293"><font>பவானி</font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font>போடிநாயக்கனூர்</font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font>பூதப்பாடி</font></option>
			<option value="BUDALUR#10.7826#78.95455"><font>பூதலூர்</font></option>
			<option value="CHETPET#12.464433#79.347539"><font>சேத்துப்பட்டு</font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font>செய்யாறு</font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font>சின்னமனூர்</font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font>சின்னசேலம்</font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font>கோயம்புத்தூர்</font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font>கடலூர்</font></option>
			<option value="CUMBUM#10.02383#78.22352"><font>கம்பம்</font></option>
			<option value="DESUR#12.502865#79.605761"><font>தேசூர்</font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font>தேவகோட்டை</font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font>தர்மபுரி</font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font>திண்டுக்கல்</font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font>எடப்பாடி</font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font>எழுமாத்தூர்</font></option>
			<option value="ERODE#11.3649089#77.7480554"><font>ஈரோடு</font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font>கெங்கவல்லி</font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font>செஞ்சி</font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font>கோபிசெட்டிபாளையம்</font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font>கோபால் பட்டி</font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font>குடியாத்தம்</font></option>
			<option value="HARUR#12.046967#78.483273"><font>ஹரூர்</font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font>ஓசூர்</font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font>இலுப்பூர்</font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font>ஜெயம்கொண்டம்</font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font>கடையநல்லூர்</font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font>கலவை</font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font>கள்ளக்குறிச்சி</font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font>கமுதி</font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font>காஞ்சிபுரம்</font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font>காங்கேயம்</font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font>காரைக்குடி</font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font>கருமந்துறை</font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font>கட்டுமன்னர்கோயில்</font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font>கீழ் பென்னதூர்</font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font>கிணத்துகடவு</font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font>கொடுமுடி</font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font>கொங்கணாபுரம்</font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font>கோயம்பேடு </font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font>கிருஷ்ணகிரி</font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font>குடவாசல்</font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font>குலசேகரம்</font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font>கும்பகோணம்</font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font>குறிஞ்சிப்பாடி</font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font>குத்தாலம்</font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font>லால்குடி</font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font>மடத்துக்குளம்</font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font>மதுரை</font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font>மதுராந்தகம்</font></option>
			<option value="MANALURPET#12.01473#79.10187"><font>மணலூர்பேட்டை</font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font>மானாமதுரை</font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font>மணப்பாறை</font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font>மன்னார்குடி</font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font>மரக்காணம்</font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font>மயிலாடுதுறை</font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font>மேச்சேரி</font></option>
			<option value="MELUR#10.0336855#78.3358366"><font>மேலூர்</font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font>மூலனூர்</font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font>முதுகுளத்தூர்</font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font>நாமகிரிப்பேட்டை</font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font>நத்தம்</font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font>நெகமம்</font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font>ஒடடன்சத்திரம்</font></option>
			<option value="OMALUR#11.740327#78.0439797"><font>ஓமலூர்</font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font>ஒரத்தநாடு</font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font>பாலக்கோடு</font></option>
			<option value="PALANI#10.3659711#77.9750828"><font>பழனி</font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font>பன்ருட்டி</font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font>பாபநாசம்</font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font>பரமக்குடி</font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font>பரமத்தி வேலூர்</font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font>பட்டுக்கோட்டை</font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font>பாவூர்ச்சத்திரம்</font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font>பெரம்பலூர்</font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font>பெருந்துறை</font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font>பெதப்பம்பட்டி</font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font>போச்சம்பள்ளி</font></option>
			<option value="POLLACHI#10.65373#77.00835"><font>பொள்ளாச்சி</font></option>
			<option value="POLUR#12.4943985#79.1543735"><font>போளூர்</font></option>
			<option value="PONGALUR#11.26251#77.03912"><font>பொங்கலூர்</font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font>புஞ்சை புளியம்பட்டி </font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font>ராஜபாளையம்</font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font>ராஜசிங்கமங்கலம்</font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font>ராமநாதபுரம்</font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font>செங்குன்றம்</font></option>
			<option value="SALEM#11.6611115#78.1533734"><font>சேலம்</font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font>சங்கரன்கோயில்</font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font>சங்கராபுரம்</font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font>சத்தியமங்கலம்</font></option>
			<option value="SATTUR#9.361723#77.9165611"><font>சாத்தூர்</font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font>செம்பனார்கோயில்</font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font>செஞ்சேரி மலையாண்டிபாளையம் </font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font>சேத்தியாத்தோப்பு</font></option>
			<option value="SEVUR#11.2464#77.2372"><font>சேவூர்</font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font>சிங்கம்புணரி</font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font>சீர்காழி</font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font>சிவகங்கை</font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font>சிவகிரி</font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font>ஸ்ரீமுஷ்ணம்</font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font>ஸ்ரீவைகுண்டம்</font></option>
			<option value="SULUR#11.0126482#77.1937931"><font>சூலூர்</font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font>வாடிப்பட்டி</font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font>தென்காசி</font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font>தாளவாடி</font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font>தம்மம்பட்டி</font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font>தஞ்சாவூர்</font></option>
			<option value="THENI#10.008839#77.4923747"><font>தேனி</font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font>திருக்கோவிலூர்</font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font>திருமங்கலம்</font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font>திருப்பத்தூர்</font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font>திருப்பூண்டி</font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font>திருப்போரூர்</font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font>திருவாடனை</font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font>திருவள்ளூர்</font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font>தியாகதுர்கம்</font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font>தொண்டாமுத்தூர்</font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font>துறையூர்</font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font>துவரங்குறிச்சி</font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font>திண்டிவனம்</font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font>திருச்சிராப்பள்ளி</font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font>திருநெல்வேலி</font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font>திருத்தணி</font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font>திருவாரூர்</font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font>உடுமலைபேட்டை</font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font>உளுந்தூர்பேட்டை</font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font>உசிலம்பட்டி</font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font>உத்திரமேரூர்</font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font>வடமதுரை</font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font>வலங்கைமான்</font></option>
			<option value="VALATHI#12.230737#79.655622"><font>வளத்தி</font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font>வள்ளியூர்</font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font>வந்தவாசி</font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font>வாணியம்பாடி</font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font>வாழப்பாடி</font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font>வெள்ளக்கோயில்</font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font>வெள்ளாங்கோவில்</font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font>வேலூர்</font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font>வேட்டவலம்</font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font>விக்கிரவாண்டி</font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font>விழுப்புரம்</font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font>விருதாச்சலம்</font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font>விருதுநகர்</font></option>
   		    	</select>

<!--==============================================================================ta_eng==================================================================================================-->



<select class="en" name="apmcplace" id="" onchange="getComboA(this)">
			<option value="currentGPS">select (Current Loc)</font></option>
			<option value="ALANGUDI#10.4593096#78.7027302"><font>Alangudi</font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font>Ambasamuthiram</font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font>Ammoor</font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font>Anaimalai</font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font>Annur</font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font>Anthiyur</font></option>
			<option value="ARANI#12.6668202#79.2706576"><font>Arani</font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font>Aranthangi</font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font>Arcot</font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font>Aruppukottai</font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font>Atthur</font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font>Avalpoondurai</font></option>
			<option value="AVALURPET#12.250306#79.416535"><font>Avalurpet</font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font>Vatlagundu</font></option>
			<option value="BHAVANI#11.450007#77.683293"><font>Bhavani</font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font>Bodinayakanur</font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font>Boothapadi</font></option>
			<option value="BUDALUR#10.7826#78.95455"><font>Budalur</font></option>
			<option value="CHETPET#12.464433#79.347539"><font>Chetpet</font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font>Cheyyar</font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font>chinnamanur</font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font>Chinnasalem</font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font>Coimbatore</font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font>Cuddalore</font></option>
			<option value="CUMBUM#10.02383#78.22352"><font>Cumbam</font></option>
			<option value="DESUR#12.502865#79.605761"><font>Desur</font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font>Devakottai</font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font>Dharmapuri</font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font>Dindukkal</font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font>Edappadi</font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font>Elumathur</font></option>
			<option value="ERODE#11.3649089#77.7480554"><font>Erode</font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font>Gangavalli</font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font>Gingee</font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font>Gobichettipalayam</font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font>Gopalpatti</font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font>Gudiyatham</font></option>
			<option value="HARUR#12.046967#78.483273"><font>Harur</font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font>Hosur</font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font>Iluppur</font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font>Jeyankondam</font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font>Kadayanallur</font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font>Kalavai</font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font>Kallakurichi</font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font>Kamuthi</font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font>Kancheepuram</font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font>Kangeyam</font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font>Karaikudi</font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font>Karumandurai</font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font>Katturmannarkovil</font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font>Kil pennathur</font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font>Kinathukadavu</font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font>Kodumudi</font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font>Konganapuram</font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font>Koyambedu </font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font>Krishnagiri</font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font>Kudavasal</font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font>Kulasekharam</font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font>Kumbakonam</font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font>Kurinjipadi</font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font>Kuthalam</font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font>Lalgudi</font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font>Madathukulam</font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font>Madurai</font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font>Madhuranthagam</font></option>
			<option value="MANALURPET#12.01473#79.10187"><font>Manalurpet</font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font>Manamadurai</font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font>Manapparai</font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font>Mannarkudi</font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font>Marakkanam</font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font>Mayiladuthurai</font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font>Mecheri</font></option>
			<option value="MELUR#10.0336855#78.3358366"><font>Melur</font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font>Moolanur</font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font>Mudhukulathur</font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font>Namagiripettai</font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font>Natham</font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font>Negamam</font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font>Ottanchathiram</font></option>
			<option value="OMALUR#11.740327#78.0439797"><font>Omalur</font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font>Orathanadu</font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font>Palacode</font></option>
			<option value="PALANI#10.3659711#77.9750828"><font>Palani</font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font>Panruti</font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font>Papanasam</font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font>Paramakudi</font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font>Paramathi vellore</font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font>Pattukkottai</font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font>Pavoorchatiram</font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font>Perumbalur</font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font>Perundurai</font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font>Pethapampatti</font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font>Pochampalli</font></option>
			<option value="POLLACHI#10.65373#77.00835"><font>Pollachi</font></option>
			<option value="POLUR#12.4943985#79.1543735"><font>Polur</font></option>
			<option value="PONGALUR#11.26251#77.03912"><font>Pongalur</font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font>Punjai puliyampatti</font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font>Rajapalayam</font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font>Rajasingamangalam</font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font>Ramanathapuram</font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font>Redhills</font></option>
			<option value="SALEM#11.6611115#78.1533734"><font>Salem</font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font>Sankarankovil</font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font>Sankarapuram</font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font>Sathyamangalam</font></option>
			<option value="SATTUR#9.361723#77.9165611"><font>Sattur</font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font>Sembanarkoil</font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font>Senjeri malayampadipalayam </font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font>Sethiathope</font></option>
			<option value="SEVUR#11.2464#77.2372"><font>Sevur</font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font>Singampuneri</font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font>Sirkali</font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font>Sivagangai</font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font>Sivagiri</font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font>Srimushnam</font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font>Srivaikundam</font></option>
			<option value="SULUR#11.0126482#77.1937931"><font>Sulur</font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font>Vadipatti</font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font>Tenkasi</font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font>Thalavadi</font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font>Thammampatti</font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font>Thanjavur</font></option>
			<option value="THENI#10.008839#77.4923747"><font>Theni</font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font>Thirukovilur</font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font>Thirumangalam</font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font>Thirupathur</font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font>Thirupoondi</font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font>Thiruppur</font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font>Thiruvadanai</font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font>Thiruvallur</font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font>Thiyagaduram</font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font>Thondamuthur</font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font>Thuraiyur</font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font>Thuvaranjurichy</font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font>Thindivanam</font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font>Thiruchirapalli</font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font>Tirunelveli</font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font>Thiruttani</font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font>Tiruvarur</font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font>Udumalpet</font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font>Ulundurpettei</font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font>Usilampatti</font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font>Uthiramerur</font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font>Vadamadurai</font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font>Valangaiman</font></option>
			<option value="VALATHI#12.230737#79.655622"><font>Valathi</font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font>Vallioor</font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font>Vandavasi</font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font>Vaniyambadi</font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font>Vazhappadi</font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font>Vellakoil</font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font>Vellamkoil</font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font>Vellore</font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font>Vettavalam</font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font>Vikiravandi</font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font>Villupuram</font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font>Virudhachalam</font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font>Virudhunagar</font></option>
   		    	</select>


<!--===================================================================================ta_hin=============================================================================================-->


<select class="hi" name="apmcplace" id="" onchange="getComboA(this)">
	<option value="currentGPS"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चुनें (वर्तमान स्थान)</font></font></option>
			<option value="ALANGUDI#10.4593096#78.7027302"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओलों</font></font></font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अम्बासमुत्र</font></font></font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अम्मूर</font></font></font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अन्नामलाई</font></font></font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अन्नूर</font></font></font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अंतियूर</font></font></font></option>
			<option value="ARANI#12.6668202#79.2706576"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अरणि</font></font></font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सोना</font></font></font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अर्काड</font></font></font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अरूपकोट्टा</font></font></font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अथुर</font></font></font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अवलपून्थुराई</font></font></font></option>
			<option value="AVALURPET#12.250306#79.416535"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अवलूरपेट</font></font></font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वट्टलकुंड</font></font></font></option>
			<option value="BHAVANI#11.450007#77.683293"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भवानी</font></font></font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बोधिनायकनूर</font></font></font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बूटापडी</font></font></font></option>
			<option value="BUDALUR#10.7826#78.95455"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बूथलूर</font></font></font></option>
			<option value="CHETPET#12.464433#79.347539"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">क्षतिग्रस्त</font></font></font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इसे करें</font></font></font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चिन्नामनूर</font></font></font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चिन्नासलेम</font></font></font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोयंबटूर</font></font></font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुड्डालोर</font></font></font></option>
			<option value="CUMBUM#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पोल</font></font></font></option>
			<option value="DESUR#12.502865#79.605761"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">टेसूर</font></font></font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">देवकोटा</font></font></font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">धर्मपुरी</font></font></font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डिंडीगुल</font></font></font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Edappadi</font></font></font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">एग्रुमाथुर</font></font></font></option>
			<option value="ERODE#11.3649089#77.7480554"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इरोड</font></font></font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केंगावल्ली</font></font></font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लाल</font></font></font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोपिसेटिपलायम</font></font></font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोपाल पट्टी</font></font></font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सभ्यता</font></font></font></option>
			<option value="HARUR#12.046967#78.483273"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हरुर</font></font></font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओहसुर</font></font></font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इलूपुर</font></font></font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जयमकोंडम</font></font></font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कडयानल्लूर</font></font></font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संघटन</font></font></font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जालसाजी</font></font></font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कामुदी</font></font></font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कांचीपुरम</font></font></font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गंगा</font></font></font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कराइकुडी</font></font></font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ब्लैकबेरी</font></font></font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कटुमन्नारकोइल</font></font></font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">निचला बेन्नादुर</font></font></font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खैर पार करना</font></font></font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नहीं दे सकता</font></font></font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोंकणपुरम</font></font></font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koyambedu</font></font></font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कृष्णागिरी</font></font></font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गुडावसल</font></font></font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुलशेखरम</font></font></font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुम्भकोणम</font></font></font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुरिनचिपडी</font></font></font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुट्टलम</font></font></font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लालगुडी</font></font></font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मदाथुकुलम</font></font></font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मदुरै</font></font></font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मधुरान्तकम्</font></font></font></option>
			<option value="MANALURPET#12.01473#79.10187"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मनालूरपेट</font></font></font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मनमदुरै</font></font></font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मानापराई</font></font></font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मन्नारकुडी</font></font></font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">काष्ठमयता</font></font></font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">माइलादुत्रयी</font></font></font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मैकचेरी</font></font></font></option>
			<option value="MELUR#10.0336855#78.3358366"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मेलूर</font></font></font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुलानूर</font></font></font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुदुकुलथुर</font></font></font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नामाक्रिप्पेट</font></font></font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खर्राटे</font></font></font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नेगम</font></font></font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Otadansatra</font></font></font></option>
			<option value="OMALUR#11.740327#78.0439797"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओमलुर</font></font></font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओरथानाडु</font></font></font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पलाकोड</font></font></font></option>
			<option value="PALANI#10.3659711#77.9750828"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पलानी</font></font></font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Panruti</font></font></font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पापनासम</font></font></font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">परमाकुदी</font></font></font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">परमथी वेल्लोर</font></font></font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पत्तुकोत्तई</font></font></font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पावुर्चत्रम</font></font></font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पेरम्बलूर</font></font></font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहुत</font></font></font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बिस्तर टेप</font></font></font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बोचमपल्ली</font></font></font></option>
			<option value="POLLACHI#10.65373#77.00835"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पोलाची</font></font></font></option>
			<option value="POLUR#12.4943985#79.1543735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">क्रिस्टल</font></font></font></option>
			<option value="PONGALUR#11.26251#77.03912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पोंगलूर</font></font></font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पंचाई इमली</font></font></font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">राजपालयम</font></font></font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">राजसिंघमंगलम</font></font></font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामनाथपुरम</font></font></font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लाल मीनार</font></font></font></option>
			<option value="SALEM#11.6611115#78.1533734"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सलेम</font></font></font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शंकरन मंदिर</font></font></font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शंकरपुरम</font></font></font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सत्यमंगलम</font></font></font></option>
			<option value="SATTUR#9.361723#77.9165611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चतुर</font></font></font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सेम्बनारकोइल</font></font></font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सेंचुरी मलयंदिपलायम</font></font></font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चेतियाथोप्पु</font></font></font></option>
			<option value="SEVUR#11.2464#77.2372"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहेजें</font></font></font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिंगम पुनारी</font></font></font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिर्च</font></font></font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिवगंगा</font></font></font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिवगिरी</font></font></font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">श्रीमुश्नाम</font></font></font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">श्रीवैकुंठम</font></font></font></option>
			<option value="SULUR#11.0126482#77.1937931"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुलूर</font></font></font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सूख</font></font></font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तेनकासी</font></font></font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तलावडी</font></font></font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">धमामबत्ती</font></font></font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तंजावुर</font></font></font></option>
			<option value="THENI#10.008839#77.4923747"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शहद</font></font></font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुकोविलूर</font></font></font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरूमंगलम</font></font></font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tirupattur</font></font></font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुपुंडी</font></font></font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thiruporur</font></font></font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुवदन</font></font></font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुवल्लुर</font></font></font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शहादत</font></font></font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">थोंडामुथुर</font></font></font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">धारयुर</font></font></font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डुवारंकुरिची</font></font></font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">टिंडीवनम</font></font></font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुचिरापल्ली</font></font></font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुनेलवेली</font></font></font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">श्रद्धेय</font></font></font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुवरुर</font></font></font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उदुमलाईपेट</font></font></font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उलुंदुरपेट</font></font></font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Usilampatti</font></font></font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उट्रामेरूर</font></font></font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उत्तर मदुरै</font></font></font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वालंगइमन</font></font></font></option>
			<option value="VALATHI#12.230737#79.655622"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पाला</font></font></font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वल्लियूर</font></font></font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आगंतुक</font></font></font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">व्यावसायिक गायक</font></font></font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रहना</font></font></font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बाढ़ मंदिर</font></font></font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वेलंगो में</font></font></font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वेल्लोर</font></font></font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिकार करना</font></font></font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">विक्रवांडी</font></font></font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जागरूकता</font></font></font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इनाम</font></font></font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">विरुधुनगर</font></font></font></option>		
   		    	</select>



<!--===================================================================================ta_mar=============================================================================================-->

<select class="mr" name="apmcplace" id="" onchange="getComboA(this)">
	<option value="currentGPS"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चुनें (वर्तमान स्थान)</font></font></option>
			<option value="ALANGUDI#10.4593096#78.7027302"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओलों</font></font></font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अम्बासमुत्र</font></font></font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अम्मूर</font></font></font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अन्नामलाई</font></font></font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अन्नूर</font></font></font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अंतियूर</font></font></font></option>
			<option value="ARANI#12.6668202#79.2706576"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अरणि</font></font></font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सोना</font></font></font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अर्काड</font></font></font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अरूपकोट्टा</font></font></font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अथुर</font></font></font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अवलपून्थुराई</font></font></font></option>
			<option value="AVALURPET#12.250306#79.416535"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अवलूरपेट</font></font></font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वट्टलकुंड</font></font></font></option>
			<option value="BHAVANI#11.450007#77.683293"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भवानी</font></font></font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बोधिनायकनूर</font></font></font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बूटापडी</font></font></font></option>
			<option value="BUDALUR#10.7826#78.95455"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बूथलूर</font></font></font></option>
			<option value="CHETPET#12.464433#79.347539"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">क्षतिग्रस्त</font></font></font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इसे करें</font></font></font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चिन्नामनूर</font></font></font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चिन्नासलेम</font></font></font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोयंबटूर</font></font></font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुड्डालोर</font></font></font></option>
			<option value="CUMBUM#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पोल</font></font></font></option>
			<option value="DESUR#12.502865#79.605761"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">टेसूर</font></font></font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">देवकोटा</font></font></font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">धर्मपुरी</font></font></font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डिंडीगुल</font></font></font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Edappadi</font></font></font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">एग्रुमाथुर</font></font></font></option>
			<option value="ERODE#11.3649089#77.7480554"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इरोड</font></font></font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">केंगावल्ली</font></font></font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लाल</font></font></font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोपिसेटिपलायम</font></font></font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोपाल पट्टी</font></font></font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सभ्यता</font></font></font></option>
			<option value="HARUR#12.046967#78.483273"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हरुर</font></font></font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओहसुर</font></font></font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इलूपुर</font></font></font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जयमकोंडम</font></font></font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कडयानल्लूर</font></font></font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संघटन</font></font></font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जालसाजी</font></font></font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कामुदी</font></font></font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कांचीपुरम</font></font></font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गंगा</font></font></font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कराइकुडी</font></font></font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ब्लैकबेरी</font></font></font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कटुमन्नारकोइल</font></font></font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">निचला बेन्नादुर</font></font></font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खैर पार करना</font></font></font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नहीं दे सकता</font></font></font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोंकणपुरम</font></font></font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koyambedu</font></font></font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कृष्णागिरी</font></font></font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गुडावसल</font></font></font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुलशेखरम</font></font></font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुम्भकोणम</font></font></font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुरिनचिपडी</font></font></font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुट्टलम</font></font></font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लालगुडी</font></font></font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मदाथुकुलम</font></font></font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मदुरै</font></font></font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मधुरान्तकम्</font></font></font></option>
			<option value="MANALURPET#12.01473#79.10187"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मनालूरपेट</font></font></font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मनमदुरै</font></font></font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मानापराई</font></font></font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मन्नारकुडी</font></font></font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">काष्ठमयता</font></font></font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">माइलादुत्रयी</font></font></font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मैकचेरी</font></font></font></option>
			<option value="MELUR#10.0336855#78.3358366"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मेलूर</font></font></font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुलानूर</font></font></font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुदुकुलथुर</font></font></font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नामाक्रिप्पेट</font></font></font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खर्राटे</font></font></font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नेगम</font></font></font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Otadansatra</font></font></font></option>
			<option value="OMALUR#11.740327#78.0439797"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओमलुर</font></font></font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओरथानाडु</font></font></font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पलाकोड</font></font></font></option>
			<option value="PALANI#10.3659711#77.9750828"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पलानी</font></font></font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Panruti</font></font></font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पापनासम</font></font></font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">परमाकुदी</font></font></font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">परमथी वेल्लोर</font></font></font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पत्तुकोत्तई</font></font></font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पावुर्चत्रम</font></font></font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पेरम्बलूर</font></font></font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहुत</font></font></font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बिस्तर टेप</font></font></font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बोचमपल्ली</font></font></font></option>
			<option value="POLLACHI#10.65373#77.00835"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पोलाची</font></font></font></option>
			<option value="POLUR#12.4943985#79.1543735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">क्रिस्टल</font></font></font></option>
			<option value="PONGALUR#11.26251#77.03912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पोंगलूर</font></font></font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पंचाई इमली</font></font></font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">राजपालयम</font></font></font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">राजसिंघमंगलम</font></font></font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामनाथपुरम</font></font></font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लाल मीनार</font></font></font></option>
			<option value="SALEM#11.6611115#78.1533734"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सलेम</font></font></font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शंकरन मंदिर</font></font></font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शंकरपुरम</font></font></font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सत्यमंगलम</font></font></font></option>
			<option value="SATTUR#9.361723#77.9165611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चतुर</font></font></font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सेम्बनारकोइल</font></font></font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सेंचुरी मलयंदिपलायम</font></font></font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चेतियाथोप्पु</font></font></font></option>
			<option value="SEVUR#11.2464#77.2372"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहेजें</font></font></font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिंगम पुनारी</font></font></font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिर्च</font></font></font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिवगंगा</font></font></font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिवगिरी</font></font></font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">श्रीमुश्नाम</font></font></font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">श्रीवैकुंठम</font></font></font></option>
			<option value="SULUR#11.0126482#77.1937931"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुलूर</font></font></font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सूख</font></font></font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तेनकासी</font></font></font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तलावडी</font></font></font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">धमामबत्ती</font></font></font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तंजावुर</font></font></font></option>
			<option value="THENI#10.008839#77.4923747"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शहद</font></font></font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुकोविलूर</font></font></font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरूमंगलम</font></font></font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tirupattur</font></font></font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुपुंडी</font></font></font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thiruporur</font></font></font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुवदन</font></font></font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुवल्लुर</font></font></font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शहादत</font></font></font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">थोंडामुथुर</font></font></font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">धारयुर</font></font></font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डुवारंकुरिची</font></font></font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">टिंडीवनम</font></font></font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुचिरापल्ली</font></font></font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुनेलवेली</font></font></font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">श्रद्धेय</font></font></font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तिरुवरुर</font></font></font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उदुमलाईपेट</font></font></font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उलुंदुरपेट</font></font></font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Usilampatti</font></font></font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उट्रामेरूर</font></font></font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उत्तर मदुरै</font></font></font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वालंगइमन</font></font></font></option>
			<option value="VALATHI#12.230737#79.655622"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पाला</font></font></font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वल्लियूर</font></font></font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आगंतुक</font></font></font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">व्यावसायिक गायक</font></font></font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रहना</font></font></font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बाढ़ मंदिर</font></font></font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वेलंगो में</font></font></font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वेल्लोर</font></font></font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिकार करना</font></font></font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">विक्रवांडी</font></font></font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जागरूकता</font></font></font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इनाम</font></font></font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">विरुधुनगर</font></font></font></option>		
   		    	</select>



<!--===================================================================================ta_Ben=============================================================================================-->

<select class="be" name="apmcplace" id="" onchange="getComboA(this)">

<option value="currentGPS"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নির্বাচন করুন (বর্তমান অবস্থান)</font></font></option>
<option value="ALANGUDI#10.4593096#78.7027302"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আলংগুড়ি</font></font></font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আম্বাসামুথিরাম</font></font></font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আম্মুর</font></font></font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আনাইমালাই</font></font></font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আন্নুর</font></font></font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">অন্তিউর</font></font></font></option>
			<option value="ARANI#12.6668202#79.2706576"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">অরণী</font></font></font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আরনথাঙ্গি</font></font></font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আর্কট</font></font></font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">অরূপপুকোট্টই</font></font></font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ফিরে</font></font></font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আভালপুন্দুরাই</font></font></font></option>
			<option value="AVALURPET#12.250306#79.416535"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আভালুরপেট</font></font></font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভাটলাগুন্ড</font></font></font></option>
			<option value="BHAVANI#11.450007#77.683293"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভবানী</font></font></font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বোদিনায়কানুর</font></font></font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বুথপদী</font></font></font></option>
			<option value="BUDALUR#10.7826#78.95455"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বুদালুর</font></font></font></option>
			<option value="CHETPET#12.464433#79.347539"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চেটপেট</font></font></font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চেয়ার</font></font></font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চিন্নামানুর</font></font></font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চিন্নাসালেম</font></font></font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কোয়েম্বাটুর</font></font></font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চুদালোর</font></font></font></option>
			<option value="CUMBUM#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আমি শুয়ে পড়ি</font></font></font></option>
			<option value="DESUR#12.502865#79.605761"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বন্ধ</font></font></font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">দেবকোত্তই</font></font></font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ধর্মপুরী</font></font></font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ডিন্দুক্কল</font></font></font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">এডাপ্পাদি</font></font></font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">এলুমাথুর</font></font></font></option>
			<option value="ERODE#11.3649089#77.7480554"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ইরোড</font></font></font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গঙ্গাভল্লী</font></font></font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জিঞ্জি</font></font></font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গোবিচেত্তিপালয়াম</font></font></font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গোপালপট্টি</font></font></font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গুদিয়াথাম</font></font></font></option>
			<option value="HARUR#12.046967#78.483273"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হারুর</font></font></font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হোসুর</font></font></font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ইলুপ</font></font></font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জয়ানকোন্ডাম</font></font></font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কাদায়নাল্লুর</font></font></font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কালাভাই</font></font></font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কল্লাকুড়িছি</font></font></font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">অল্প একটু</font></font></font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কাঞ্চিপুরম</font></font></font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কাঙ্গেয়াম</font></font></font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কারাইকুড়ি</font></font></font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কারুমন্দুরাই</font></font></font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কাটুরমান্নারকোভিল</font></font></font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কিল পেন্নাথুর</font></font></font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কিনাথুকাদাভু</font></font></font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কোদুমুদি</font></font></font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কঙ্গনাপুরম</font></font></font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">একেবারে শুরু</font></font></font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কৃষ্ণগিরি</font></font></font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কুদভাসল</font></font></font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কুলশেখারাম</font></font></font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কুম্ভকোনম</font></font></font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কুরিঞ্জিপদী</font></font></font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কুথালাম</font></font></font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">লালগুড়ি</font></font></font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মাদাথুকুলম</font></font></font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মাদুরাই</font></font></font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মধুরান্থগাম</font></font></font></option>
			<option value="MANALURPET#12.01473#79.10187"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মানলুরপেট</font></font></font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মানামাদুরাই</font></font></font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মনপ্পারাই</font></font></font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মান্নারকুদি</font></font></font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মারাক্কানম</font></font></font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ময়লাদুথুরাই</font></font></font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মেচেরি</font></font></font></option>
			<option value="MELUR#10.0336855#78.3358366"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মেলুর</font></font></font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মুলানুর</font></font></font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মুধুকুলথুর</font></font></font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নামগিরিপেত্তাই</font></font></font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নাথাম</font></font></font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আর মা</font></font></font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">অট্টনচাথিরাম</font></font></font></option>
			<option value="OMALUR#11.740327#78.0439797"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ওমালুর</font></font></font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ওরাথানাডু</font></font></font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">প্যালাকোড</font></font></font></option>
			<option value="PALANI#10.3659711#77.9750828"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ফ্রান্স</font></font></font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পানরুটি</font></font></font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পাপনসম</font></font></font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পরমকুদি</font></font></font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পরমাথি ভেলোর</font></font></font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পাট্টুকোট্টাই</font></font></font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পাভুরচাতিরাম</font></font></font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পেরুমবালুর</font></font></font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পেরুন্দুরাই</font></font></font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পেথাপমপট্টি</font></font></font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পোচামপল্লী</font></font></font></option>
			<option value="POLLACHI#10.65373#77.00835"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পোলাচি</font></font></font></option>
			<option value="POLUR#12.4943985#79.1543735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পোলুর</font></font></font></option>
			<option value="PONGALUR#11.26251#77.03912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পোঙ্গালুর</font></font></font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পুঞ্জাই পুলিয়ামপট্টি</font></font></font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রাজাপালায়ম</font></font></font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রাজসিংহমঙ্গলম</font></font></font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রামানাথপুরম</font></font></font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রেডহিলস</font></font></font></option>
			<option value="SALEM#11.6611115#78.1533734"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সালেম</font></font></font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শঙ্করাঙ্কভিল</font></font></font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শঙ্করাপুরম</font></font></font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সত্যমঙ্গলম</font></font></font></option>
			<option value="SATTUR#9.361723#77.9165611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সত্তুর</font></font></font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সেম্বানারকোয়েল</font></font></font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সেঞ্জেরি মালয়মদীপালয়ম</font></font></font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সেথিয়াথোপ</font></font></font></option>
			<option value="SEVUR#11.2464#77.2372"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সেভুর</font></font></font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সিঙ্গাম্পুনেরি</font></font></font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভিনেগার</font></font></font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শিবগঙ্গাই</font></font></font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শিবগিরি</font></font></font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শ্রীমুষ্ণম</font></font></font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শ্রীবৈকুণ্ডে</font></font></font></option>
			<option value="SULUR#11.0126482#77.1937931"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">টেন্ড্রিল</font></font></font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভাদিপট্টি</font></font></font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পরচর্চা</font></font></font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থালাওয়াদি</font></font></font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থাম্মামপট্টি</font></font></font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তাঞ্জাভুর</font></font></font></option>
			<option value="THENI#10.008839#77.4923747"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কেন</font></font></font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিরুকাভিলুর</font></font></font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিরুমঙ্গলম</font></font></font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তিরুপাথুর</font></font></font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিরুপুন্ডি</font></font></font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিরুপুর</font></font></font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তিরুবদনাই</font></font></font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তিরুভাল্লুর</font></font></font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিয়াগাদুরাম</font></font></font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থন্ডামুথুর</font></font></font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থুরাইয়ুর</font></font></font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থুভারঞ্জুরিচি</font></font></font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিন্ডিভানম</font></font></font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিরুচিরাপল্লী</font></font></font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তিরুনেলভেলি</font></font></font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তিরুত্তানি</font></font></font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তিরুভারুর</font></font></font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ডুমালপেট</font></font></font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">উলুন্দুরপেটেই</font></font></font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বাতি ব্যবহার করুন</font></font></font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">উথিরামেরুর</font></font></font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভাদামাদুরাই</font></font></font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভালংগাইমান</font></font></font></option>
			<option value="VALATHI#12.230737#79.655622"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভালথী</font></font></font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভালিওর</font></font></font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পকেটে সমস্যা</font></font></font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভানিয়াম্বাদি</font></font></font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভাজাপ্পাদি</font></font></font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভেলাকোয়েল</font></font></font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভেলামকোয়েল</font></font></font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভেলোর</font></font></font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভেট্টাভালাম</font></font></font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভিকিরাভান্দি</font></font></font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভিলুপুরম</font></font></font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বিরুধাচলম</font></font></font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বিরুধুনগর</font></font></font></option>

</select>


<!--===================================================================================ta_tel=============================================================================================-->

<select class="te" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఎంచుకోండి (ప్రస్తుత స్థానం)</font></font></option>
			<option value="ALANGUDI#10.4593096#78.7027302"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అలంగుడి</font></font></font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అంబసముతీరం</font></font></font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అమ్మూర్</font></font></font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆనైమలై</font></font></font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అన్నూర్</font></font></font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అంతియూర్</font></font></font></option>
			<option value="ARANI#12.6668202#79.2706576"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అరణి</font></font></font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అరంతంగి</font></font></font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆర్కాట్</font></font></font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అరుప్పుకోట్టై</font></font></font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరిగి</font></font></font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అవల్పూండురై</font></font></font></option>
			<option value="AVALURPET#12.250306#79.416535"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అవలూరుపేట</font></font></font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వట్లగుండ్</font></font></font></option>
			<option value="BHAVANI#11.450007#77.683293"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">భవానీ</font></font></font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బోడినాయకనూర్</font></font></font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బూతపడి</font></font></font></option>
			<option value="BUDALUR#10.7826#78.95455"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బూదలూరు</font></font></font></option>
			<option value="CHETPET#12.464433#79.347539"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చెట్&zwnj;పేట్</font></font></font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చెయ్యార్</font></font></font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చిన్నమనూరు</font></font></font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చిన్నసేలం</font></font></font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కోయంబత్తూరు</font></font></font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కడలూరు</font></font></font></option>
			<option value="CUMBUM#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నేను పడుకున్నాను</font></font></font></option>
			<option value="DESUR#12.502865#79.605761"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆఫ్</font></font></font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దేవకోట్టై</font></font></font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ధర్మపురి</font></font></font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దిండుక్కల్</font></font></font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఎడప్పాడి</font></font></font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఎలుమత్తూరు</font></font></font></option>
			<option value="ERODE#11.3649089#77.7480554"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఈరోడ్</font></font></font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గంగవల్లి</font></font></font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అల్లం</font></font></font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గోబిచెట్టిపాళయం</font></font></font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గోపాల్&zwnj;పట్టి</font></font></font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గుడియాతం</font></font></font></option>
			<option value="HARUR#12.046967#78.483273"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హరూర్</font></font></font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హోసూరు</font></font></font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఇలుప్</font></font></font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జయంకొండం</font></font></font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కడయనల్లూరు</font></font></font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కలవై</font></font></font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కళ్లకురిచ్చి</font></font></font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కొంచెం</font></font></font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కాంచీపురం</font></font></font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కాంగేయం</font></font></font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కారైకుడి</font></font></font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కరుమండురై</font></font></font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కట్టూర్మన్నార్కోవిల్</font></font></font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కిల్ పెన్నాథూర్</font></font></font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కినాతుకడవు</font></font></font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కొడుముడి</font></font></font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కొంగణాపురం</font></font></font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చాలా ప్రారంభం</font></font></font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కృష్ణగిరి</font></font></font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కుడవాసల్</font></font></font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కులశేఖరం</font></font></font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కుంభకోణం</font></font></font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కురింజిపడి</font></font></font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కుతాళం</font></font></font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">లాల్గుడి</font></font></font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మడతుకులం</font></font></font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మధురై</font></font></font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మధురాంతగం</font></font></font></option>
			<option value="MANALURPET#12.01473#79.10187"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మనలూరుపేట</font></font></font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మనమదురై</font></font></font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మనప్పారై</font></font></font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మన్నార్కుడి</font></font></font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మరక్కనం</font></font></font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మైలాడుతురై</font></font></font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మేచేరి</font></font></font></option>
			<option value="MELUR#10.0336855#78.3358366"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మేలూరు</font></font></font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మూలనూరు</font></font></font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ముద్దుకులత్తూరు</font></font></font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నామగిరిపేట్టై</font></font></font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నాథమ్</font></font></font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మరియు అమ్మ</font></font></font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఒట్టంచతిరం</font></font></font></option>
			<option value="OMALUR#11.740327#78.0439797"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఓమలూరు</font></font></font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఒరతనాడు</font></font></font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పాలకోడ్</font></font></font></option>
			<option value="PALANI#10.3659711#77.9750828"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఫ్రాన్స్</font></font></font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పన్రుతి</font></font></font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పాపనాశం</font></font></font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పరమకుడి</font></font></font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పరమతి వేలూరు</font></font></font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పట్టుక్కోట్టై</font></font></font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పావూర్చతిరం</font></font></font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పెరుంబలూరు</font></font></font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పెరుందురై</font></font></font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పెతపంపట్టి</font></font></font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font>Pochampalli</font></option>
			<option value="POLLACHI#10.65373#77.00835"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పొల్లాచి</font></font></font></option>
			<option value="POLUR#12.4943985#79.1543735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పోలూరు</font></font></font></option>
			<option value="PONGALUR#11.26251#77.03912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పొంగళూరు</font></font></font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పుంజై పులియంపట్టి</font></font></font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాజపాళయం</font></font></font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాజసింగమంగళం</font></font></font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రామనాథపురం</font></font></font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రెడ్&zwnj;హిల్స్</font></font></font></option>
			<option value="SALEM#11.6611115#78.1533734"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సేలం</font></font></font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">శంకరన్&zwnj;కోవిల్</font></font></font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">శంకరపురం</font></font></font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సత్యమంగళం</font></font></font></option>
			<option value="SATTUR#9.361723#77.9165611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సత్తూరు</font></font></font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సెంబనార్కోయిల్</font></font></font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సెంజేరి మలయంపాడిపాళయం</font></font></font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సేథియాథోప్</font></font></font></option>
			<option value="SEVUR#11.2464#77.2372"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సేవూర్</font></font></font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సింగంపునేరి</font></font></font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వెనిగర్</font></font></font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">శివగంగై</font></font></font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">శివగిరి</font></font></font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">శ్రీముష్ణం</font></font></font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">శ్రీవైకుండకు</font></font></font></option>
			<option value="SULUR#11.0126482#77.1937931"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">టెండ్రిల్స్</font></font></font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వడిపట్టి</font></font></font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గాసిప్</font></font></font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తాళవాడి</font></font></font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తమ్మంపట్టి</font></font></font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తంజావూరు</font></font></font></option>
			<option value="THENI#10.008839#77.4923747"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఎందుకు</font></font></font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరుకావిలూర్</font></font></font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరుమంగళం</font></font></font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరుపత్తూరు</font></font></font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరుపూండి</font></font></font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరుప్పూర్</font></font></font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరువాడనై</font></font></font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరువళ్లూరు</font></font></font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">త్యాగదూరం</font></font></font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తొండముత్తూరు</font></font></font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తురైయూర్</font></font></font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తువరంజురిచి</font></font></font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font>Thindivanam</font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరుచిరాపల్లి</font></font></font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరునెల్వేలి</font></font></font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరుత్తణి</font></font></font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తిరువారూర్</font></font></font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దుమల్పేట్</font></font></font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఉలుందూరుపెట్టెయ్</font></font></font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దీపాలను ఉపయోగించండి</font></font></font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఉతిరమేరూరు</font></font></font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వడమదురై</font></font></font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వలంగైమాన్</font></font></font></option>
			<option value="VALATHI#12.230737#79.655622"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వలతి</font></font></font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వల్లీయూర్</font></font></font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సమస్య జేబు</font></font></font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వాణియంబాడి</font></font></font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వజప్పాడి</font></font></font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వెల్లకోయిల్</font></font></font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వెల్లంకోయిల్</font></font></font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వెల్లూరు</font></font></font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వెట్టవలం</font></font></font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వికిరవండి</font></font></font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">విల్లుపురం</font></font></font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">విరుధాచలం</font></font></font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">విరుదునగర్</font></font></font></option>
</select>

<!--===================================================================================ta_mal=============================================================================================-->

<select class="ml" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരഞ്ഞെടുക്കുക (നിലവിലെ സ്ഥലം)</font></font></option>
			<option value="ALANGUDI#10.4593096#78.7027302"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ആലങ്കുടി</font></font></font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അംബാസമുതിരം</font></font></font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അമ്മൂർ</font></font></font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ആനമലൈ</font></font></font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അന്നൂർ</font></font></font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അന്തിയൂർ</font></font></font></option>
			<option value="ARANI#12.6668202#79.2706576"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ആരാണി</font></font></font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അറന്തങ്കി</font></font></font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ആർക്കോട്ട്</font></font></font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അറുപ്പുകോട്ടൈ</font></font></font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മടങ്ങുക</font></font></font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അവൽപൂണ്ടുറൈ</font></font></font></option>
			<option value="AVALURPET#12.250306#79.416535"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അവലൂർപേട്ട</font></font></font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വത്ലഗുണ്ട്</font></font></font></option>
			<option value="BHAVANI#11.450007#77.683293"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഭവാനി</font></font></font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബോഡിനായ്ക്കനൂർ</font></font></font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font>Boothapadi</font></option>
			<option value="BUDALUR#10.7826#78.95455"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ബുഡല്ലൂർ</font></font></font></option>
			<option value="CHETPET#12.464433#79.347539"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ചെറ്റ്പേട്ട്</font></font></font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font>Cheyyar</font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ചിന്നമന്നൂർ</font></font></font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ചിന്നസേലം</font></font></font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കോയമ്പത്തൂർ</font></font></font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കടലൂർ</font></font></font></option>
			<option value="CUMBUM#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഞാൻ കിടന്നു</font></font></font></option>
			<option value="DESUR#12.502865#79.605761"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഓഫ്</font></font></font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ദേവകോട്ടൈ</font></font></font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ധർമ്മപുരി</font></font></font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font>Dindukkal</font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">എടപ്പാടി</font></font></font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">എലമത്തൂർ</font></font></font></option>
			<option value="ERODE#11.3649089#77.7480554"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഈറോഡ്</font></font></font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഗംഗവല്ലി</font></font></font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഇഞ്ചി</font></font></font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഗോബിചെട്ടിപാളയം</font></font></font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഗോപാൽപട്ടി</font></font></font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഗുഡിയാത്തം</font></font></font></option>
			<option value="HARUR#12.046967#78.483273"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഹരൂർ</font></font></font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഹൊസൂർ</font></font></font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഇലുപ്പ്</font></font></font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ജയൻകൊണ്ടം</font></font></font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കടയനല്ലൂർ</font></font></font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കലവായ്</font></font></font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കള്ളക്കുറിച്ചി</font></font></font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">അല്പം</font></font></font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കാഞ്ചീപുരം</font></font></font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കാങ്കേയം</font></font></font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കാരക്കുടി</font></font></font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കരുമണ്ടുറൈ</font></font></font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കാട്ടൂർമണ്ണാർകോവിൽ</font></font></font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കിൽ പെണ്ണത്തൂർ</font></font></font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കിണത്തുകടവ്</font></font></font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font>Kodumudi</font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കൊങ്ങണാപുരം</font></font></font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തുടക്കം തന്നെ</font></font></font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കൃഷ്ണഗിരി</font></font></font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കുടവാസൽ</font></font></font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കുലശേഖരം</font></font></font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കുംഭകോണം</font></font></font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കുറിഞ്ഞിപ്പാടി</font></font></font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">കുത്താലം</font></font></font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ലാൽഗുഡി</font></font></font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മടത്തുകുളം</font></font></font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മധുരൈ</font></font></font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മധുരാന്തഗം</font></font></font></option>
			<option value="MANALURPET#12.01473#79.10187"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മണലൂർപേട്ട</font></font></font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മാനാമധുരൈ</font></font></font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മണപ്പാറ</font></font></font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മണ്ണാർക്കുടി</font></font></font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font>Marakkanam</font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മയിലാടുതുറൈ</font></font></font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മേച്ചേരി</font></font></font></option>
			<option value="MELUR#10.0336855#78.3358366"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മേലൂർ</font></font></font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മൂലനൂർ</font></font></font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">മുതുകുളത്തൂർ</font></font></font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">നാമഗിരിപ്പേട്ടൈ</font></font></font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">നാഥം</font></font></font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഒപ്പം അമ്മയും</font></font></font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font>Ottanchathiram</font></option>
			<option value="OMALUR#11.740327#78.0439797"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഓമല്ലൂർ</font></font></font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഒറത്തനാട്</font></font></font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പാലക്കോട്</font></font></font></option>
			<option value="PALANI#10.3659711#77.9750828"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഫ്രാൻസ്</font></font></font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പണ്രുട്ടി</font></font></font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പാപനാശം</font></font></font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പരമക്കുടി</font></font></font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പരമത്തി വെല്ലൂർ</font></font></font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പട്ടുകോട്ടൈ</font></font></font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പാവൂർച്ചതിരം</font></font></font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പെരുമ്പല്ലൂർ</font></font></font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പെരുന്തുരൈ</font></font></font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പേതപ്പംപട്ടി</font></font></font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പോച്ചമ്പള്ളി</font></font></font></option>
			<option value="POLLACHI#10.65373#77.00835"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പൊള്ളാച്ചി</font></font></font></option>
			<option value="POLUR#12.4943985#79.1543735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പോലൂർ</font></font></font></option>
			<option value="PONGALUR#11.26251#77.03912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പൊങ്ങല്ലൂർ</font></font></font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പുഞ്ചൈ പുളിയാമ്പട്ടി</font></font></font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">രാജപാളയം</font></font></font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">രാജസിംഗമംഗലം</font></font></font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">രാമനാഥപുരം</font></font></font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">റെഡ്ഹിൽസ്</font></font></font></option>
			<option value="SALEM#11.6611115#78.1533734"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സേലം</font></font></font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ശങ്കരൻകോവിൽ</font></font></font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ശങ്കരപുരം</font></font></font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font>Sathyamangalam</font></option>
			<option value="SATTUR#9.361723#77.9165611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സത്തൂർ</font></font></font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സെമ്പനാർകോവിൽ</font></font></font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സെഞ്ചേരി മലയമ്പാടിപാളയം</font></font></font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സേത്യാതോപ്പ്</font></font></font></option>
			<option value="SEVUR#11.2464#77.2372"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സേവൂർ</font></font></font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">സിംഗംപുനേരി</font></font></font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വിനാഗിരി</font></font></font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ശിവഗംഗൈ</font></font></font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ശിവഗിരി</font></font></font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ശ്രീമുഷ്ണം</font></font></font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ശ്രീവൈകുണ്ഡത്തിലേക്ക്</font></font></font></option>
			<option value="SULUR#11.0126482#77.1937931"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ടെൻഡ്രിൽസ്</font></font></font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വാടിപ്പട്ടി</font></font></font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഗോസിപ്പ്</font></font></font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തലവടി</font></font></font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തമ്മംപട്ടി</font></font></font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തഞ്ചാവൂർ</font></font></font></option>
			<option value="THENI#10.008839#77.4923747"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">എന്തിന്</font></font></font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുകാവിലൂർ</font></font></font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുമംഗലം</font></font></font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുപ്പത്തൂർ</font></font></font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുപ്പൂണ്ടി</font></font></font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുപ്പൂർ</font></font></font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുവടനൈ</font></font></font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുവള്ളൂർ</font></font></font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ത്യാഗദൂരം</font></font></font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തൊണ്ടാമുത്തൂർ</font></font></font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തുറയൂർ</font></font></font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തുവരഞ്ഞൂറിച്ചി</font></font></font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിണ്ടിവനം</font></font></font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുച്ചിറപ്പള്ളി</font></font></font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുനെൽവേലി</font></font></font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുട്ടണി</font></font></font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">തിരുവാരൂർ</font></font></font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ദുമാൽപേട്ട്</font></font></font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഉളുന്ദൂർപേട്ടൈ</font></font></font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വിളക്കുകൾ ഉപയോഗിക്കുക</font></font></font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ഉതിരമേരൂർ</font></font></font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വടമധുരൈ</font></font></font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വലങ്കൈമാൻ</font></font></font></option>
			<option value="VALATHI#12.230737#79.655622"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വലത്തി</font></font></font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വള്ളിയൂർ</font></font></font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">പ്രശ്നം പോക്കറ്റ്</font></font></font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വാണിയമ്പാടി</font></font></font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വാഴപ്പാടി</font></font></font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വെള്ളക്കോയിൽ</font></font></font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font>Vellamkoil</font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വെല്ലൂർ</font></font></font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വേട്ടവളം</font></font></font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വിക്കിരവണ്ടി</font></font></font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വില്ലുപുരം</font></font></font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വിരുദാചലം</font></font></font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">വിരുദുനഗർ</font></font></font></option>
</select>

<!--===================================================================================ta_odi=============================================================================================-->

<select class="od" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚୟନ କରନ୍ତୁ (ସାମ୍ପ୍ରତିକ ଲୋକ)</font></font></option>
			<option value="ALANGUDI#10.4593096#78.7027302"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଲାଙ୍ଗୁଡି |</font></font></font></option>
			<option value="AMBASAMUTHIRAM#8.711232#77.449389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅମ୍ବାସାମୁଥିରାମ |</font></font></font></option>
			<option value="AMMOOR#12.9249606#79.3668505"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆମ୍ବୁର |</font></font></font></option>
			<option value="ANAIMALAI#10.5847477#76.9369355"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅନାଇମାଲାଇ |</font></font></font></option>
			<option value="ANNUR#11.2014671#77.2349899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅନ୍ନୁର |</font></font></font></option>
			<option value="ANTHIYUR#11.5748588#77.5865973"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆନ୍ଥିୟୁର୍ |</font></font></font></option>
			<option value="ARANI#12.6668202#79.2706576"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆରାନି |</font></font></font></option>
			<option value="ARANTHANGI#10.1631#78.996201"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆରନ୍ତଙ୍ଗୀ |</font></font></font></option>
			<option value="ARCOT#12.9056446#79.3252376"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆରକୋଟ |</font></font></font></option>
			<option value="ARUPPUKOTTAI#9.50278#78.05735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅରୁପକୁଟ୍ଟାଇ |</font></font></font></option>
			<option value="ATTHUR#11.5869403#78.6178807"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଫେରନ୍ତୁ</font></font></font></option>
			<option value="AVALPOONDURAI#11.23435#77.72115"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଭାଲପୁଣ୍ଡୁରାଇ |</font></font></font></option>
			<option value="AVALURPET#12.250306#79.416535"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Avalurpet</font></font></font></option>
			<option value="BATLAGUNDU#10.03015#78.0358"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭାଟଲାଗୁଣ୍ଡ |</font></font></font></option>
			<option value="BHAVANI#11.450007#77.683293"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭବାନୀ</font></font></font></option>
			<option value="BODINAYAKANUR#10.0208443#77.3467399"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବୋଡିନୟାକାନୁର |</font></font></font></option>
			<option value="BOOTHAPADI#11.342243#77.7274689"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବୁଥାପାଦୀ |</font></font></font></option>
			<option value="BUDALUR#10.7826#78.95455"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବୁଦାଲୁର |</font></font></font></option>
			<option value="CHETPET#12.464433#79.347539"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚେଟପେଟ୍ |</font></font></font></option>
			<option value="CHEYYAR#12.6630445#79.5367251"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚେୟାର</font></font></font></option>
			<option value="CHINNAMANUR#9.8023121#77.3606369"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚିନ୍ନାମୁର |</font></font></font></option>
			<option value="CHINNASALEM#11.649546#78.859863"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚିନ୍ନାସେଲମ୍ |</font></font></font></option>
			<option value="COIMBATORE#10.9934#76.94325"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୋଏମ୍ବାଟୁର |</font></font></font></option>
			<option value="CUDDALOREOT#11.750018#79.749982"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୁଡାଲୋର |</font></font></font></option>
			<option value="CUMBUM#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମୁଁ ଶୋଇଛି</font></font></font></option>
			<option value="DESUR#12.502865#79.605761"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବନ୍ଦ</font></font></font></option>
			<option value="DEVAKOTTAI#9.9475466#78.8205643"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଦେବକୋଟାଇ |</font></font></font></option>
			<option value="DHARMAPURI#12.1462091#78.1578583"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଧର୍ମପୁରୀ</font></font></font></option>
			<option value="DINDIGUL#10.3491857#77.9879389"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଡିନ୍ଦୁକ୍କାଲ |</font></font></font></option>
			<option value="EDAPPADI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଏଡାପ୍ପାଡି |</font></font></font></option>
			<option value="ELUMATHUR#11.26265#77.77265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଏଲୁମାଥୁର |</font></font></font></option>
			<option value="ERODE#11.3649089#77.7480554"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କ୍ଷୟ</font></font></font></option>
			<option value="GANGAVALLI#11.5662#77.8396"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗଙ୍ଗାଭାଲୀ |</font></font></font></option>
			<option value="GINGEE#12.2541472#79.4164899"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜିଙ୍ଗି</font></font></font></option>
			<option value="GOBICHETTIPALAYAM#11.3642483#77.4554185"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗୋବିଚେଟ୍ଟିପାଲାୟମ୍ |</font></font></font></option>
			<option value="GOPALPATTI#10.0163663#77.9642771"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗୋପାଳପଟ୍ଟୀ |</font></font></font></option>
			<option value="GUDIYATHAM#12.9179463#78.8755409"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗୁଦିୟାଥମ୍ |</font></font></font></option>
			<option value="HARUR#12.046967#78.483273"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହାରୁର |</font></font></font></option>
			<option value="HOSUR#12.7212445#77.8079526"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହୋସୁର |</font></font></font></option>
			<option value="ILUPPUR#10.512194#78.623923"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଇଲୁପ୍</font></font></font></option>
			<option value="JEYANKONDAM#11.2071999#79.367602"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jeyankondam |</font></font></font></option>
			<option value="KADAYANALLUR#9.0022176#77.2476065"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାଦାୟନାଲୁର |</font></font></font></option>
			<option value="KALAVAI#12.7674633#79.4169356"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାଲାଭାଇ |</font></font></font></option>
			<option value="KALLAKURICHI#11.739325#78.962375"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାଲାକୁରିଚି |</font></font></font></option>
			<option value="KAMUTHI#9.38343#78.31395"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅଳ୍ପ ଟିକେ</font></font></font></option>
			<option value="KANCHEEPURAM#12.848627#79.70516"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାଞ୍ଚିପୁରମ୍ |</font></font></font></option>
			<option value="KANGEYAM#11.00599#77.5609"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାଙ୍ଗିୟମ୍ |</font></font></font></option>
			<option value="KARIKUDI#10.062707#78.7900282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କରାଇକୁଡି |</font></font></font></option>
			<option value="KARUMANDURAI#11.8255537#78.6278915"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କରୁମାଣ୍ଡୁରାଇ |</font></font></font></option>
			<option value="KATTUMANNARKOIL#11.2600711#79.5544653"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାଟୁରମାନ୍କୋଭିଲ୍ |</font></font></font></option>
			<option value="KILPENNATHUR#12.2252961#79.0746837"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କିଲ ପେନାଥୁର |</font></font></font></option>
			<option value="KINATHUKADAVU#10.8203#77.00425"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କିନାଥୁକଡାଭୁ |</font></font></font></option>
			<option value="KODUMUDI#11.0656458#77.8785688"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୋଡୁମୁଦି |</font></font></font></option>
			<option value="KONGANAPURAM#11.5607696#77.9084737"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କଙ୍ଗନାପୁରମ୍ |</font></font></font></option>
			<option value="KOYAMBEDU#13.0694#80.1948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆରମ୍ଭ</font></font></font></option>
			<option value="KRISHNAGIRI#12.5249536#78.2080908"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୃଷ୍ଣଗିରି</font></font></font></option>
			<option value="KUDAVASAL#10.8631718#79.4787287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୁଦାଭାସାଲ୍ |</font></font></font></option>
			<option value="KULASEKHARAM#8.2543714#77.3393285"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୁଲାସେଖରାମ</font></font></font></option>
			<option value="KUMBAKONAM#10.9616945#79.3881132"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୁମ୍ବାକୋନମ୍ |</font></font></font></option>
			<option value="KURUNJIPADY#11.5955#79.59865"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୁରିଞ୍ଜିପାଡି</font></font></font></option>
			<option value="KUTHALAM#10.8424#79.79105"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୁଥାଲମ୍ |</font></font></font></option>
			<option value="LALGUDI#10.875319#78.8183035"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଲାଲଗୁଡି |</font></font></font></option>
			<option value="MADATHUKULAM#10.5595839#77.3654611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମଦଥୁକୁଲମ୍ |</font></font></font></option>
			<option value="MADURAI#9.9599655#78.1349839"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମଦୁରାଇ |</font></font></font></option>
			<option value="MADURANTHAGAM#12.5102166#79.8849354"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମଧୁରନ୍ଥାଗମ୍ |</font></font></font></option>
			<option value="MANALURPET#12.01473#79.10187"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମନାଲୁରପେଟ୍ |</font></font></font></option>
			<option value="MANAMADURAI#9.6901803#78.4521029"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମନମାଦୁରାଇ |</font></font></font></option>
			<option value="MANAPPARAI#10.4593016#78.7027382"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମନପାରାଏ |</font></font></font></option>
			<option value="MANNARKUDI#10.7713187#79.6369974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମାନାର୍କୁଡି |</font></font></font></option>
			<option value="MARAKKANAM#12.186952#79.927895"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମର୍କକାନମ୍ |</font></font></font></option>
			<option value="MAYILADUTHURAI#11.1014129#79.6744558"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମାୟିଲାଦୁଥୁରାଇ |</font></font></font></option>
			<option value="MECHERI#11.8362039#77.9453668"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମେଚେରୀ |</font></font></font></option>
			<option value="MELUR#10.0336855#78.3358366"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମେଲୁର |</font></font></font></option>
			<option value="MOOLANUR#10.792987#77.708006"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମଲାନୁର |</font></font></font></option>
			<option value="MUDHUKALATHUR#9.3542083#78.5007537"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମୁଦୁକୁଲାଥୁର |</font></font></font></option>
			<option value="NAMAGIRIPETTAI#11.4281568#78.2685402"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନାମାଗିରିପେଟାଇ |</font></font></font></option>
			<option value="NATHAM#10.2175291#78.3578755"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନାଥମ୍ |</font></font></font></option>
			<option value="NEGAMAM#11.09735#77.3093"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଏବଂ ମା</font></font></font></option>
			<option value="ODDANCHATRAM#10.45604#77.75114"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ottanchathiram</font></font></font></option>
			<option value="OMALUR#11.740327#78.0439797"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଓମାଲୁର |</font></font></font></option>
			<option value="ORATHANADU#10.58745#79.2593"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Orathanadu</font></font></font></option>
			<option value="PALACODE#12.3027104#78.0741888"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାଲାକୋଡ୍ |</font></font></font></option>
			<option value="PALANI#10.3659711#77.9750828"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଫ୍ରାନ୍ସ</font></font></font></option>
			<option value="PANRUTI#11.778624#79.5894832"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାନ୍ରୁତି |</font></font></font></option>
			<option value="PAPANASAM#10.9232664#79.2688912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପପାନାସମ୍ |</font></font></font></option>
			<option value="PARAMAKUDI#9.5460681#78.587774"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପରମାକୁଡି |</font></font></font></option>
			<option value="PARAMATHI_VELUR#11.1486003#78.0124894"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାରାମାଥୀ ଭେଲୋର |</font></font></font></option>
			<option value="PATTUKKOTTAI#10.4252814#79.3140301"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପଟ୍ଟୁକୋଟାଇ |</font></font></font></option>
			<option value="PAVOORCHATRAM#8.865761#77.497015"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପାଭୋରଚାଟିରାମ |</font></font></font></option>
			<option value="PERUMBALUR#11.2404097#78.8547142"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପେରୁମ୍ବାଲୁର |</font></font></font></option>
			<option value="PERUNDURAI#11.3391202#77.7105902"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପେରୁଣ୍ଡୁରାଇ |</font></font></font></option>
			<option value="PETHAPPAMPATTI#10.67762#77.216085"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପେଥାମ୍ପାଟ୍ଟି |</font></font></font></option>
			<option value="POCHAMPALLI#12.3831976#78.4113506"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପୋଚାମ୍ପାଲୀ |</font></font></font></option>
			<option value="POLLACHI#10.65373#77.00835"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପୋଲାଚି</font></font></font></option>
			<option value="POLUR#12.4943985#79.1543735"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପୋଲୁର |</font></font></font></option>
			<option value="PONGALUR#11.26251#77.03912"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପୋଙ୍ଗାଲୁର |</font></font></font></option>
			<option value="PUNJAI_PULIAMPADDI#11.3516#77.1667"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପଞ୍ଜାଇ ପୁଲିୟମ୍ପତୀ |</font></font></font></option>
			<option value="RAJAPALAYAM#9.4407754#77.5913176"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାଜପାଲାୟମ୍ |</font></font></font></option>
			<option value="RAJASINGAMANGALAM#9.780664#78.9214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାଜସିଙ୍ଗାମଙ୍ଗଲମ୍ |</font></font></font></option>
			<option value="RAMANATHAPURAM#9.37084#78.8287"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାମନାଥପୁରମ୍ |</font></font></font></option>
			<option value="REDHILLS#13.3378381#80.1928933"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରେଡହିଲ୍ସ |</font></font></font></option>
			<option value="SALEM#11.6611115#78.1533734"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାଲେମ |</font></font></font></option>
			<option value="SANKARANKOVIL#9.1681736#77.525265"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାଙ୍କାରାନକୋଭିଲ୍ |</font></font></font></option>
			<option value="SANKARAPURAM#11.887289#78.916718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସଙ୍କରାପୁରମ୍ |</font></font></font></option>
			<option value="SATHYAMANGALAM#11.4929498#77.2794059"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସତ୍ୟମଙ୍ଗଲମ୍ |</font></font></font></option>
			<option value="SATTUR#9.361723#77.9165611"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସତ୍ତୁର |</font></font></font></option>
			<option value="SEMBANARKOIL#11.1051#79.7421"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସେମବନାର୍କୋଏଲ୍ |</font></font></font></option>
			<option value="SENJERI_MALAIYADIPALAYAM#11.11005#76.9208"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସେଞ୍ଜେରୀ ମାଲାୟାମ୍ପଡିପାଲାୟମ୍ |</font></font></font></option>
			<option value="SETHIATHOPE#11.275828#79.551532"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସେଥିଆଥୋପ୍ |</font></font></font></option>
			<option value="SEVUR#11.2464#77.2372"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସେଭୁର |</font></font></font></option>
			<option value="SINGAMPUNERI#10.2175231#78.3578815"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସିଙ୍ଗାମ୍ପୁନେରୀ |</font></font></font></option>
			<option value="SIRKALI#11.2428165#79.7282161"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭିନେଗାର |</font></font></font></option>
			<option value="SIVAGANGAI#9.850009#78.499991"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସିଭଗଙ୍ଗାଇ |</font></font></font></option>
			<option value="SIVAGIRI#9.3573371#77.4372004"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସିଭାଗିରି |</font></font></font></option>
			<option value="SRIMUSHNAM#11.275827#79.551533"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶ୍ରୀମୁଷ୍ଣମ୍</font></font></font></option>
			<option value="SRIVAIKUNDAM#8.628852#77.912921"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶ୍ରୀଭାଇକୁଣ୍ଡାଙ୍କୁ</font></font></font></option>
			<option value="SULUR#11.0126482#77.1937931"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଟେଣ୍ଡ୍ରିଲ୍ସ |</font></font></font></option>
			<option value="T_VADIPATTI#10.02383#78.22352"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭାଦିପଟ୍ଟୀ |</font></font></font></option>
			<option value="TENKASI#8.9598406#77.3055111"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗପସପ</font></font></font></option>
			<option value="THALAVADI#11.504784#77.2383862"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥାଲାୱାଡି |</font></font></font></option>
			<option value="THAMMAMPATTI#11.448608#78.5023128"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥାମ୍ମ୍ପତି</font></font></font></option>
			<option value="THANJAVUR#10.7869994#79.1378274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thanjavur</font></font></font></option>
			<option value="THENI#10.008839#77.4923747"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାହିଁକି?</font></font></font></option>
			<option value="THIRUKOVILUR#11.9674015#79.2027428"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁକାଭିଲୁର |</font></font></font></option>
			<option value="THIRUMANGALAM#9.81294#77.9974"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ତିରୁମାଙ୍ଗାଲମ୍ |</font></font></font></option>
			<option value="THIRUPATHUR#10.108477#78.59731"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁପାଥୁର |</font></font></font></option>
			<option value="THIRUPOONDI#10.6267662#79.8142568"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁପୁଣ୍ଡି</font></font></font></option>
			<option value="THIRUPPUR#12.725957#80.189323"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁପୁର</font></font></font></option>
			<option value="THIRUVADANAI#9.783363#78.918278"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁବଡାନାଇ |</font></font></font></option>
			<option value="THIRUVALLUR#13.1405269#79.9064019"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁଭାଲୁର |</font></font></font></option>
			<option value="THIYAGADURAM#11.7441045#79.0729793"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିୟାଗାଡୁରମ୍ |</font></font></font></option>
			<option value="THONDAMUTHUR#10.97455#76.86295"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥୋଣ୍ଡାମୁଥୁର |</font></font></font></option>
			<option value="THURAIYUR#11.1414545#78.5944718"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥରୁୟୁର |</font></font></font></option>
			<option value="THUVARANKURICHY#10.606775#78.423073"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥୁଆରଞ୍ଜୁରିଚି |</font></font></font></option>
			<option value="TINDIVANAM#12.236884#79.649948"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିଣ୍ଡିଭାନମ୍ |</font></font></font></option>
			<option value="TIRUCHIRAPALLI#10.80595#78.69665"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁଚିରାପଲି |</font></font></font></option>
			<option value="TIRUNELVELI#8.731395#77.708214"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ତିରୁନେଲଭେଲି |</font></font></font></option>
			<option value="TIRUTTANI#13.1435215#79.8932108"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଥିରୁତାନି</font></font></font></option>
			<option value="TIRUVARUR#10.7756475#79.6043282"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ତିରୁଭ ur ର |</font></font></font></option>
			<option value="UDUMALPET#10.58457#77.251446"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଡୁମାଲପେଟ୍ |</font></font></font></option>
			<option value="ULUNDURPETTAI#11.6921612#79.2864166"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ulundurpettei</font></font></font></option>
			<option value="USILAMPATTI#9.96754#77.786711"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଦୀପ ବ୍ୟବହାର କରନ୍ତୁ |</font></font></font></option>
			<option value="UTHIRAMERUR#12.635#79.76805"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଉଥିରାମୁର |</font></font></font></option>
			<option value="VADAMADURAI#10.5116363#78.0596044"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭଦାମଦୁରାଇ |</font></font></font></option>
			<option value="VALANGAIMAN#10.8897397#79.3910058"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭାଲାଙ୍ଗାଇମାନ</font></font></font></option>
			<option value="VALATHI#12.230737#79.655622"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭାଲାଥୀ |</font></font></font></option>
			<option value="VALLIOOR#8.3798984#77.6233274"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭାଲିଅର୍ |</font></font></font></option>
			<option value="VANDAVASI#12.5077136#79.606138"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସମସ୍ୟା ପକେଟ |</font></font></font></option>
			<option value="VANIYAMBADI#12.6950325#78.6218853"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭାନିୟମ୍ବାଡି |</font></font></font></option>
			<option value="VAZHAPPADI#11.6492191#78.4024106"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vazhappadi</font></font></font></option>
			<option value="VELLAKOIL#10.95425#77.68744"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭେଲାକୋଏଲ୍ |</font></font></font></option>
			<option value="VELLAMKOIL#11.342245#77.7274669"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭେଲାମକୋଏଲ୍ |</font></font></font></option>
			<option value="VELLORE#12.9086275#79.0638549"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭେଲୋର |</font></font></font></option>
			<option value="VETTAVALAM#12.2232311#79.0798639"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭେଟ୍ଟାଭାଲମ୍ |</font></font></font></option>
			<option value="VIKIRAVANDI#12.0645#79.54175"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vikiravandi</font></font></font></option>
			<option value="VILLUPURAM#11.97005#79.50625"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭିଲୁପୁରମ୍</font></font></font></option>
			<option value="VIRUDHACHALAM#11.5228084#79.324538"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Virudhachalam</font></font></font></option>
			<option value="VIRUDHUNAGAR#9.5786392#77.9731392"><font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Virudhunagar</font></font></font></option>
</select>`;


var west_bengal=`<!--===================================================================================wb_tam=============================================================================================-->

<select class="ta"  name="apmcplace" id="" onchange="getComboA(this)">
<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>பக்தா கிருஷாக் பசார்</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>பெத்துவடஹாரி ப்ரின்சிபல் மார்க்கெட் யார்ட்</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>பிஷ்ணுபுர்</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>துப்குரி பிரின்சிபல் மார்க்கெட் யார்ட்</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>ஃபாலாகாடா</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>கங்காரம்பூர்</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>இஸ்லாம்பூர் பிரின்சிபல் மார்க்கெட் யார்ட்</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>ஜியகஞ்சி கிருஷாக் பசார்</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>கால்நா சப் மார்க்கெட்</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>கரிம்புர் சப் மார்க்கெட்</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>முகம்மத்பாஸார் கிருஷாக் பசார்</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>நாகாச்சி பரக்கிருஷாக் பசார்</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>பான்ஸ்குரா இக்ரிஷாக் பசார்</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>சம்ஷேர்கஞ் கிருஷாக் பசார்</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>சாம்சி உப சந்தை வைராம்</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>ஷெஒரபுலி</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>சிலிகுரி அடித்தளம் கம்மு</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>சிம்லபால்</font></option>   
</select>


<!--===================================================================================wb_eng=============================================================================================-->

<select class="en" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>bagda krishak bazar</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>bethuadahari principal market yard</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>bishnupur</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>dhupguri principal market yard</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>falakata</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>gangarampur</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>islampur principal market yard</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>jiyaganj krishak bazar</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>kalna sub market yard</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>karimpur submarket yard</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>mohamad bazar krishak bazar</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>nakashipara krishak bazar</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>panskura i krishak bazar</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>samsherganj krishak bazar</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>samsi sub market yard</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>sheoraphuli</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>siliguri regulated market comm</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>simlapal</font></option>   
</select>


<!--===================================================================================wb_hin=============================================================================================-->

<select class="hi" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>भक्त कृषक बाजार</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>बेथवाड़ाहारी प्रिंसिपल मार्केट यार्ड</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>बिश्नुपुर</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>धुबकुरी प्रिंसिपल मार्केट यार्ड</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>फलाकाडा</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>गंगारामपुर</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>इस्लामपुर प्रिंसिपल मार्केट यार्ड</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>जियाकांजी कृषक बाजार</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>कालना उप बाजार</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>करीमपुर उप बाज़ार</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>मुहम्मद बाज़ार कृषक बाज़ार</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>नागाची बराकिरुशाक बाज़ार</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>पंसकुरा इग्रीशाक बाज़ार</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>समशेरगंज कृषक बाजार</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>सैमसी उप बाजार वैरम</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>शेओराबुलि</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>सिलीगुड़ी की नींव कम्मू है</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>सिमलापाल</font></option> 
</select>


<!--===================================================================================wb_mar=============================================================================================-->

<select class="mr" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>भक्त कृषक बाजार</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>बेथवाड़ाहारी प्रिंसिपल मार्केट यार्ड</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>बिश्नुपुर</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>धुबकुरी प्रिंसिपल मार्केट यार्ड</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>फलाकाडा</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>गंगारामपुर</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>इस्लामपुर प्रिंसिपल मार्केट यार्ड</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>जियाकांजी कृषक बाजार</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>कालना उप बाजार</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>करीमपुर उप बाज़ार</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>मुहम्मद बाज़ार कृषक बाज़ार</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>नागाची बराकिरुशाक बाज़ार</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>पंसकुरा इग्रीशाक बाज़ार</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>समशेरगंज कृषक बाजार</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>सैमसी उप बाजार वैरम</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>शेओराबुलि</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>सिलीगुड़ी की नींव कम्मू है</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>सिमलापाल</font></option> 
</select>


<!--===================================================================================wb_Ben=============================================================================================-->
<select class="be" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">

<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>ভক্ত কৃষক বাজার</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>বেথওয়াদহরি প্রিন্সিপাল মার্কেট ইয়ার্ড</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>বিষ্ণুপুর</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>ধুবকুড়ি প্রধান মার্কেট ইয়ার্ড</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>ফ্যালাকাদা</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>গঙ্গারামপুর</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>ইসলামপুর প্রধান মার্কেট ইয়ার্ড</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>জিয়াকাঞ্জি ক্রুশাক বাজার</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>কালনা সাব মার্কেট</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>করিমপুর সাব মার্কেট</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>মুহাম্মদ বাজার ক্রুশাক বাজার</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>নাগাছি বড়কিরুশক বাজার</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>পাঁশকুড়া ইগ্রিশক বাজার</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>সমশেরগঞ্জ কৃষক বাজার</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>সামসি সাব মার্কেট ভাইরাম</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>শেওড়াবুলি</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>শিলিগুড়ি ফাউন্ডেশন কাম্মু</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>সিমলাপাল</font></option>   

</select>

<!--===================================================================================wb_tel=============================================================================================-->

<select class="te" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>భక్త క్రుషక్ బజార్</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>బెత్వాదాహరి ప్రిన్సిపాల్ మార్కెట్ యార్డ్</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>బిష్ణుపూర్</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>దుబ్కూరి ప్రిన్సిపల్ మార్కెట్ యార్డ్</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>ఫల్లకాడ</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>గంగారాంపూర్</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>ఇస్లాంపూర్ ప్రిన్సిపల్ మార్కెట్ యార్డ్</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>జియకంజి క్రుషక్ బజార్</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>కల్నా సబ్ మార్కెట్</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>కరీంపూర్ సబ్ మార్కెట్</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>ముహమ్మద్ బజార్ క్రుషక్ బజార్</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>నాగచి బరాకిరుషక్ బజార్</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>పన్స్కురా ఇగ్రిషాక్ బజార్</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>సంషేర్‌గంజ్ క్రుషక్ బజార్</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>సంసి సబ్ మార్కెట్ వైరం</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>షియోరాబులి</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>సిలిగురి పునాది కమ్ము</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>సిమ్లాపాల్</font></option>   
</select>


<!--===================================================================================wb_mal=============================================================================================-->


<select class="ml" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">

<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>ഭക്ത ക്രൂശക് ബസാർ</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>ബേത്ത്വാദഹാരി പ്രിൻസിപ്പൽ മാർക്കറ്റ് യാർഡ്</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>ബിഷ്ണുപൂർ</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>ധൂബ്കുരി പ്രിൻസിപ്പൽ മാർക്കറ്റ് യാർഡ്</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>ഫാലക്കാഡ</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>ഗംഗാരംപൂർ</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>ഇസ്ലാംപൂർ പ്രിൻസിപ്പൽ മാർക്കറ്റ് യാർഡ്</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>ജിയാകൻജി ക്രുഷക് ബസാർ</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>കൽന സബ് മാർക്കറ്റ്</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>കരിമ്പൂർ സബ് മാർക്കറ്റ്</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>മുഹമ്മദ് ബസാർ ക്രൂശക് ബസാർ</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>നാഗാച്ചി ബാരകിരുശക് ബസാർ</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>പാൻസ്കുര ഇഗ്രിഷക് ബസാർ</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>സംഷേർഗഞ്ച് ക്രൂശക് ബസാർ</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>സാംസി സബ് മാർക്കറ്റ് വൈരം</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>ഷിയോറാബുലി</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>കമ്മുവാണ് സിലിഗുരി ഫൗണ്ടേഷൻ</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>സിംലാപാൽ</font></option>

</select>


<!--===================================================================================wb_odi=============================================================================================-->

<select class="od" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">

<option value="bagda_krishak_bazar#23.208809288159074#88.88720318041267"><font>ଭକ୍ତ କ୍ରୁଶକ ବଜାର |</font></option>
<option value="bethuadahari_principal_market_yard#23.60714548581742#88.39251461040301"><font>ବେଥୱାଡାହାରୀ ପ୍ରିନ୍ସିପାଲ୍ ମାର୍କେଟ୍ ୟାର୍ଡ |</font></option>
<option value="bishnupur#23.071946116200053#87.31461128646833"><font>ବିଷ୍ଣୁପୁର</font></option>
<option value="dhupguri_principal_market_yard#26.59012795823397#89.01121455168986"><font>ଧୁବୁରୀ ପ୍ରିନ୍ସିପାଲ୍ ମାର୍କେଟ୍ ୟାର୍ଡ |</font></option>
<option value="falakata#26.52817926866637#89.1990277674672"><font>ଫାଲାକଡା |</font></option>
<option value="gangarampur#25.410055874504717#88.53748779152897"><font>ଗଙ୍ଗାରାମପୁର |</font></option>
<option value="islampur_principal_market_yard#26.662629247387443#88.20243000456102"><font>ଇସଲାମପୁର ପ୍ରିନ୍ସିପାଲ ମାର୍କେଟ ୟାର୍ଡ |</font></option>
<option value="jiyaganj_krishak_bazar#24.250059926698952#88.26104159134312"><font>ଜିଆକାନଜୀ କ୍ରୁଶକ ବଜାର |</font></option>
<option value="kalna_sub_market_yard#23.21001759155514#88.35894367361315"><font>କାଲନା ସବ୍ ମାର୍କେଟ୍ |</font></option>
<option value="karimpur_submarket_yard#23.97572241012539#88.63162243828779"><font>କରିମପୁର ସବ୍ ମାର୍କେଟ୍ |</font></option>
<option value="mohamad_bazar_krishak_bazar#23.98141583796579#87.59326849578025"><font>ମହମ୍ମଦ ବଜାର କ୍ରୁଶକ ବଜାର</font></option>
<option value="nakashipara_krishak_bazar#23.616423075252648#88.37446152275393"><font>ନାଗାଚି ବାରକିରୁଷକ ବଜାର |</font></option>
<option value="panskura_i_krishak_bazar#22.436755401831377#87.70502392334643"><font>ପାନସ୍କୁରା ଇଗ୍ରିଶକ ବଜାର |</font></option>
<option value="samsherganj_krishak_bazar#23.116845658863575#86.24768834109027"><font>ସାମସରଗଞ୍ଜ କ୍ରୁଶକ ବଜାର |</font></option>
<option value="samsi_sub_market_yard#25.27370671681632#88.00329532465881"><font>ସାମସି ସବ୍ ମାର୍କେଟ୍ ଭାୟାରମ୍ |</font></option>
<option value="sheoraphuli#22.77051592289412#88.31799449890816"><font>ଶୋରାବୁଲି |</font></option>
<option value="siliguri_regulated_market_comm#26.737068545885702# 88.41305026539821"><font>ସିଲିଗୁରି ଫାଉଣ୍ଡେସନ୍ ହେଉଛି କାମୁ |</font></option>
<option value="simlapal#22.920204781872048#87.07442870387587"><font>ସିମଲାପାଲ୍ |</font></option>

</select>`;


var kerala =`<!--===================================================================================kl_tam=============================================================================================-->

<select class="ta" name="apmcplace" id="" onchange="getComboA(this)">
<option value="arwm_muvattupuzha#9.9784#76.5738"><font>முவட்டுபுழா</font></option>
<option value="arwm_nedumangad#8.6010#77.0020"><font>நெடுமங்காடு</font></option>
<option value="arwm_sultan_barthery#11.6302# 76.0657"><font>சுல்தான் பார்தெரி</font></option>
<option value="auwm_anayara#8.5150#76.9366"><font>அனயரா</font></option>
<option value="auwm_maradu#9.9600#76.3230"><font>மரடு</font></option>
<option value="auwm_vengeri#11.3135#75.8144"><font>வெங்கேரி</font></option>
</select>

<!--===================================================================================kl_eng=============================================================================================-->

<select class="en"  style="display:none" name="apmcplace" id=""  onchange="getComboA(this)">
<option value="arwm_muvattupuzha#9.9784#76.5738">Muvattupuzha</option>
<option value="arwm_nedumangad#8.6010#77.0020">Nedumangad</option>
<option value="arwm_sultanbarthery#11.6302#76.0657">Sultanbarthery</option>
<option value="auwm_anayara#8.5150#76.9366">Anayara</option>
<option value="auwm_maradu#9.9600#76.3230">Maradu</option>
<option value="auwm_vengeri#11.3135#75.8144">Vengeri</option>
</select>

<!--===================================================================================kl_hin=============================================================================================-->

<select class="hi" style="display:none" name="apmcplace" id=""  onchange="getComboA(this)">

<option value="arwm_muvattupuzha#9.9784#76.5738">मुवात्तुपूजा</option>
<option value="arwm_nedumangad#8.6010#77.0020">नेदुमनगड</option>
<option value="arwm_sultanbarthery#11.6302#76.0657">सुलतानबार्थरी</option>
<option value="auwm_anayara#8.5150#76.9366">अनायरा</option>
<option value="auwm_maradu#9.9600#76.3230">मरदु</option>
<option value="auwm_vengeri#11.3135#75.8144">वेंगेरी</option>

</select>


<!--===================================================================================kl_mar=============================================================================================-->


<select class="mr" style="display:none" name="apmcplace" id=""  onchange="getComboA(this)">

<option value="arwm_muvattupuzha#9.9784#76.5738">मुवात्तुपूजा</option>
<option value="arwm_nedumangad#8.6010#77.0020">नेदुमनगड</option>
<option value="arwm_sultanbarthery#11.6302#76.0657">सुलतानबार्थरी</option>
<option value="auwm_anayara#8.5150#76.9366">अनायरा</option>
<option value="auwm_maradu#9.9600#76.3230">मरदु</option>
<option value="auwm_vengeri#11.3135#75.8144">वेंगेरी</option>

</select>

<!--===================================================================================kl_Ben=============================================================================================-->



<select class="be" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="arwm_muvattupuzha#9.9784#76.5738"><font>মুভাট্টুপুঝা</font></option>
<option value="arwm_nedumangad#8.6010#77.0020"><font>নেদুমঙ্গাদু</font></option>
<option value="arwm_sultan_barthery#11.6302# 76.0657"><font>সুলতান বারথেরি</font></option>
<option value="auwm_anayara#8.5150#76.9366"><font>আনাইরা</font></option>
<option value="auwm_maradu#9.9600#76.3230"><font>মারু</font></option>
<option value="auwm_vengeri#11.3135#75.8144"><font>ভেঙ্গেরি</font></option>
</select>

<!--===================================================================================kl_tel=============================================================================================-->


<select class="kl" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="arwm_muvattupuzha#9.9784#76.5738"><font>మువట్టుపుజ</font></option>
<option value="arwm_nedumangad#8.6010#77.0020"><font>నేడుమంగడు</font></option>
<option value="arwm_sultan_barthery#11.6302# 76.0657"><font>సుల్తాన్ బర్తేరి</font></option>
<option value="auwm_anayara#8.5150#76.9366"><font>అనైరా</font></option>
<option value="auwm_maradu#9.9600#76.3230"><font>మారు</font></option>
<option value="auwm_vengeri#11.3135#75.8144"><font>వెంగేరి</font></option>
</select>


<!--===================================================================================kl_mal=============================================================================================-->

<select class="ml" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="arwm_muvattupuzha#9.9784#76.5738"><font>മൂവാറ്റുപുഴ</font></option>
<option value="arwm_nedumangad#8.6010#77.0020"><font>നെടുമങ്ങാട്</font></option>
<option value="arwm_sultan_barthery#11.6302# 76.0657"><font>സുൽത്താൻ ബർത്തേരി</font></option>
<option value="auwm_anayara#8.5150#76.9366"><font>അനൈര</font></option>
<option value="auwm_maradu#9.9600#76.3230"><font>മരു</font></option>
<option value="auwm_vengeri#11.3135#75.8144"><font>വേങ്ങേരി</font></option>
</select>


<!--===================================================================================kl_odi=============================================================================================-->

<select class="od" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="arwm_muvattupuzha#9.9784#76.5738"><font>ମୁଭାଟୁପୁଜା |</font></option>
<option value="arwm_nedumangad#8.6010#77.0020"><font>ନେଡୁମାଙ୍ଗଡୁ |</font></option>
<option value="arwm_sultan_barthery#11.6302# 76.0657"><font>ସୁଲତାନ ବାର୍ଟେରି |</font></option>
<option value="auwm_anayara#8.5150#76.9366"><font>ଅନାଇରା |</font></option>
<option value="auwm_maradu#9.9600#76.3230"><font>ମାରୁ</font></option>
<option value="auwm_vengeri#11.3135#75.8144"><font>ଭେଙ୍ଗେରୀ |</font></option>
</select>`;




var andra =`
<!-- ------------------------------------------------------------------------ap_ta------------------------------------------------------------------------------- -->

<select class="ta" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>தேர்ந்தெடுக்கவும் (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>அதோனி</font></option>
<option value="anakapalli#17.6868#83.0061"><font>அனகபள்ளி</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>அனந்தபுரமு</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>பொப்பிலி எபிஎம்சி</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>சிலகலுரிப்பேட் எபிஎம்சி</font></option>
<option value="denduluru#16.5719#81.2124"><font>தென்டுலுரு</font></option>
<option value="duggirala#16.5250#80.5828"><font>டுக்கிராலா</font></option>
<option value="eluru#16.7100#81.0950"><font>எலூரு</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>கோபாலபுரம்</font></option>
<option value="guntur#16.3067#80.4365"><font>குந்தூர்</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>குர்ரம்கொண்ட</font></option>
<option value="hindupur#13.8281#77.4913"><font>ஹிந்துபுர்</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>இச்சாபுரம் எபிஎம்சி</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>ஜக்கய்யபேட் எபிஎம்சி</font></option>
<option value="kadapa#14.4779#78.8239"><font>கடபா</font></option>
<option value="kalikiri#13.7592#78.9573"><font>காலிகிரி</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>கல்யாண்டுர்க்</font></option>
<option value="kurnool#15.8281#78.0373"><font>குர்நூல்</font></option>
<option value="madanapalle#13.5500#78.5000"><font>மடனபள்ளி</font></option>
<option value="palamaner#13.2000#78.7500"><font>பாலமானேர்</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>பர்ச்சூர் எபிஎம்சி</font></option>
<option value="pattikonda#14.0111#77.9342"><font>பட்டிகொண்ட</font></option>
<option value="piduguralla#16.4833#79.8964"><font>பிடுகுரால்லா</font></option>
<option value="punganur#13.3667#78.5833"><font>புங்கானூர்</font></option>
<option value="rapur#15.5792#79.3119"><font>ராப்பூர்</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>ராவுலாபலேம் எபிஎம்சி</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>ராயதுர்க் எபிஎம்சி</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>சத்தேனபள்ளி எபிஎம்சி</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>தடிகொண்ட எபிஎம்சி</font></option>
<option value="tenali#16.2433#80.6408"><font>தெனாலி</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>வெமுரு பட்டிப்ரோலு</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>விசியானகரம் எபிஎம்சி</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>ஏம்மிக்கனூர்</font></option>
</select>   		    	

<!-- ------------------------------------------------------------------------ap_en------------------------------------------------------------------------------- -->

<select class="en" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>Select (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>Adoni</font></option>
<option value="anakapalli#17.6868#83.0061"><font>Anakapalli</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>Ananthapuramu</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>Bobbili</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>Chilakaluripet</font></option>
<option value="denduluru#16.5719#81.2124"><font>Denduluru</font></option>
<option value="duggirala#16.5250#80.5828"><font>Duggirala</font></option>
<option value="eluru#16.7100#81.0950"><font>Eluru</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>Gopalapuram</font></option>
<option value="guntur#16.3067#80.4365"><font>Guntur</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>Gurramkonda</font></option>
<option value="hindupur#13.8281#77.4913"><font>Hindupur</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>Ichapuram</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>Jaggayyapet</font></option>
<option value="kadapa#14.4779#78.8239"><font>Kadapa</font></option>
<option value="kalikiri#13.7592#78.9573"><font>Kalikiri</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>Kalyandurg</font></option>
<option value="kurnool#15.8281#78.0373"><font>Kurnool</font></option>
<option value="madanapalle#13.5500#78.5000"><font>Madanapalle</font></option>
<option value="palamaner#13.2000#78.7500"><font>Palamaner</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>Parchur</font></option>
<option value="pattikonda#14.0111#77.9342"><font>Pattikonda</font></option>
<option value="piduguralla#16.4833#79.8964"><font>Piduguralla</font></option>
<option value="punganur#13.3667#78.5833"><font>Punganur</font></option>
<option value="rapur#15.5792#79.3119"><font>Rapur</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>Ravulapalem</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>Rayadurg</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>Sattenapalle</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>Tadikonda</font></option>
<option value="tenali#16.2433#80.6408"><font>Tenali</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>Vemuru Bhattiprolu</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>Vizianagaram</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>Yemmiganur</font></option>
</select>   		    	

<!-- ------------------------------------------------------------------------ap_ml------------------------------------------------------------------------------- -->

<select class="ml" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>തിരഞ്ഞെടുക്കുക (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>അഡോണി</font></option>
<option value="anakapalli#17.6868#83.0061"><font>അനകപ്പള്ളി</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>അനന്തപുരമു</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>ബോബിലി</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>ചിലകലൂരിപേട്ട്</font></option>
<option value="denduluru#16.5719#81.2124"><font>ദെന്ദുലൂരു</font></option>
<option value="duggirala#16.5250#80.5828"><font>ദുഗ്ഗിരാല</font></option>
<option value="eluru#16.7100#81.0950"><font>ഏലൂരു</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>ഗോപാലപുരം</font></option>
<option value="guntur#16.3067#80.4365"><font>ഗുണ്ടൂർ</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>ഗുരംക്കൊണ്ട</font></option>
<option value="hindupur#13.8281#77.4913"><font>ഹിന്ദുപൂർ</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>ഇച്ചാപുരം</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>ജഗ്ഗയ്യപേട്ട്</font></option>
<option value="kadapa#14.4779#78.8239"><font>കടപ്പ</font></option>
<option value="kalikiri#13.7592#78.9573"><font>കാളികിരി</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>കല്യാൺദുർഗ്</font></option>
<option value="kurnool#15.8281#78.0373"><font>കുർനൂൾ</font></option>
<option value="madanapalle#13.5500#78.5000"><font>മദനപ്പള്ളി</font></option>
<option value="palamaner#13.2000#78.7500"><font>പലമനേർ</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>പാർചുർ</font></option>
<option value="pattikonda#14.0111#77.9342"><font>പാറ്റികോണ്ട</font></option>
<option value="piduguralla#16.4833#79.8964"><font>പുഡിഗുരല്ല</font></option>
<option value="punganur#13.3667#78.5833"><font>പുങ്കനൂർ</font></option>
<option value="rapur#15.5792#79.3119"><font>റാപൂർ</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>രവുലപാലെം</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>റായദുർഗ്</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>സട്ടേനപ്പള്ളി</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>താടിക്കൊണ്ട</font></option>
<option value="tenali#16.2433#80.6408"><font>തെനാലി</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>വേമുരു ഭട്ടിപ്രോലു</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>വിജയനഗരം</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>യെമ്മിഗനൂർ</font></option>
</select>   		    	


<!-- ------------------------------------------------------------------------ap_mr------------------------------------------------------------------------------- -->

<select class="mr" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>निवडा (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>अदोनी</font></option>
<option value="anakapalli#17.6868#83.0061"><font>अनकापल्ली</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>अनंतपुरम</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>बोब्बिली</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>चिलकलुरिपेट</font></option>
<option value="denduluru#16.5719#81.2124"><font>डेंडुलुरू</font></option>
<option value="duggirala#16.5250#80.5828"><font>दुग्गिराला</font></option>
<option value="eluru#16.7100#81.0950"><font>एलुरु</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>गोपालपुरम</font></option>
<option value="guntur#16.3067#80.4365"><font>गुंटूर</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>गुर्रमकोंडा</font></option>
<option value="hindupur#13.8281#77.4913"><font>हिंदूपूर</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>इच्छापुरम</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>जग्गय्यपेट</font></option>
<option value="kadapa#14.4779#78.8239"><font>कडप्पा</font></option>
<option value="kalikiri#13.7592#78.9573"><font>कालिकिरी</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>कल्याणदुर्ग</font></option>
<option value="kurnool#15.8281#78.0373"><font>कुर्नूल</font></option>
<option value="madanapalle#13.5500#78.5000"><font>मदनपल्ले</font></option>
<option value="palamaner#13.2000#78.7500"><font>पलामनेर</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>परचुर</font></option>
<option value="pattikonda#14.0111#77.9342"><font>पट्टीकोंडा</font></option>
<option value="piduguralla#16.4833#79.8964"><font>पिदुगुरल्ला</font></option>
<option value="punganur#13.3667#78.5833"><font>पुंगनूर</font></option>
<option value="rapur#15.5792#79.3119"><font>रापूर</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>रावुलापालेम</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>रायादुर्ग</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>सट्टेनपल्ले</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>ताडीकोंडा</font></option>
<option value="tenali#16.2433#80.6408"><font>तेनाली</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>वेमुरु भट्टिप्रोलू</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>विजयनगरम</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>येमिगनूर</font></option>
</select>   		    	


<!-- ------------------------------------------------------------------------ap_hi------------------------------------------------------------------------------- -->

<select class="hi" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>चुनें (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>अडोनी</font></option>
<option value="anakapalli#17.6868#83.0061"><font>अनकापल्ली</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>अनंतपुरम</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>बोब्बिली</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>चिलकलुरिपेट</font></option>
<option value="denduluru#16.5719#81.2124"><font>डेंडुलुरू</font></option>
<option value="duggirala#16.5250#80.5828"><font>दुग्गिराला</font></option>
<option value="eluru#16.7100#81.0950"><font>एलुरु</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>गोपालपुरम</font></option>
<option value="guntur#16.3067#80.4365"><font>गुंटूर</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>गुर्रमकोंडा</font></option>
<option value="hindupur#13.8281#77.4913"><font>हिंदूपुर</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>इच्छापुरम</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>जग्गय्यपेट</font></option>
<option value="kadapa#14.4779#78.8239"><font>कडप्पा</font></option>
<option value="kalikiri#13.7592#78.9573"><font>कालिकिरी</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>कल्याणदुर्ग</font></option>
<option value="kurnool#15.8281#78.0373"><font>कुरनूल</font></option>
<option value="madanapalle#13.5500#78.5000"><font>मदनपल्ले</font></option>
<option value="palamaner#13.2000#78.7500"><font>पलामनेर</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>परचुर</font></option>
<option value="pattikonda#14.0111#77.9342"><font>पट्टीकोंडा</font></option>
<option value="piduguralla#16.4833#79.8964"><font>पिदुगुरल्ला</font></option>
<option value="punganur#13.3667#78.5833"><font>पुंगनूर</font></option>
<option value="rapur#15.5792#79.3119"><font>रापुर</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>रवुलापालेम</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>रायदुर्ग</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>सत्तेनपल्ले</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>ताडीकोंडा</font></option>
<option value="tenali#16.2433#80.6408"><font>तेनाली</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>वेमुरु भट्टिप्रोलु</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>विजयनगरम</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>येमिगनूर</font></option>
</select>   		    	


<!-- ------------------------------------------------------------------------ap_od------------------------------------------------------------------------------- -->

<select class="od" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>ଚୟନ କରନ୍ତୁ (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>ଆଦୋନୀ</font></option>
<option value="anakapalli#17.6868#83.0061"><font>ଅନକାପଲ୍ଲୀ</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>Ananthapuramu</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>ବୋବିଲି</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>ଚିଲାକାଲୁରିପେଟ୍</font></option>
<option value="denduluru#16.5719#81.2124"><font>ଦେନ୍ଦୁଲୁରୁ</font></option>
<option value="duggirala#16.5250#80.5828"><font>ଦୁଗ୍ଗିରାଲା</font></option>
<option value="eluru#16.7100#81.0950"><font>ଏଲୁରୁ</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>ଗୋପାଳପୁରମ୍</font></option>
<option value="guntur#16.3067#80.4365"><font>ଗୁଣ୍ଟୁର</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>ଗୁର୍ରମକୋଣ୍ଡା</font></option>
<option value="hindupur#13.8281#77.4913"><font>ହିନ୍ଦୁପୁର</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>ଇଛାପୁରମ୍</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>ଜଗ୍ଗାଯ଼ାପେଟ୍</font></option>
<option value="kadapa#14.4779#78.8239"><font>କାଡାପା</font></option>
<option value="kalikiri#13.7592#78.9573"><font>କଲିକିରି</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>କଲ୍ଯ଼ାଣଦୁର୍ଗ</font></option>
<option value="kurnool#15.8281#78.0373"><font>କୁର୍ନୁଲ</font></option>
<option value="madanapalle#13.5500#78.5000"><font>ମଦନପଲ୍ଲେ</font></option>
<option value="palamaner#13.2000#78.7500"><font>ପାଲାମନେର</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>ପାରଚୁର</font></option>
<option value="pattikonda#14.0111#77.9342"><font>ପଟ୍ଟିକୋଣ୍ଡା</font></option>
<option value="piduguralla#16.4833#79.8964"><font>ପିଡୁଗୁରାଲା</font></option>
<option value="punganur#13.3667#78.5833"><font>ପୁଙ୍ଗାନୁର</font></option>
<option value="rapur#15.5792#79.3119"><font>ରାପୁର</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>ରାବୁଲାପାଲେମ</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>ରାଯ଼ଦୁର୍ଗ</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>ସଟ୍ଟେନପଲ୍ଲେ</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>ତାଦିକୋଣ୍ଡା</font></option>
<option value="tenali#16.2433#80.6408"><font>ତେନାଲି</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>ଭେମୁରୁ ଭଟ୍ଟିପ୍ରୋଲୁ</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>ବିଜଯ଼ନଗରମ୍</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>ଯ଼େମିଗାନୁର</font></option>
</select>   		    	


<!-- ------------------------------------------------------------------------ap_te------------------------------------------------------------------------------- -->

<select class="te" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>ఎంచుకోండి (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>ఆడోని</font></option>
<option value="anakapalli#17.6868#83.0061"><font>అనకాపల్లి</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>అనంతపురం</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>బొబ్బిలి</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>చిలకలూరిపేట</font></option>
<option value="denduluru#16.5719#81.2124"><font>దెందులూరు</font></option>
<option value="duggirala#16.5250#80.5828"><font>దుగ్గిరాల</font></option>
<option value="eluru#16.7100#81.0950"><font>ఏలూరు</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>గోపాలపురం</font></option>
<option value="guntur#16.3067#80.4365"><font>గుంటూరు</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>గుర్రంకొండ</font></option>
<option value="hindupur#13.8281#77.4913"><font>హిందూపురం</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>ఇచ్ఛాపురం</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>జగ్గయ్యపేట</font></option>
<option value="kadapa#14.4779#78.8239"><font>కడప</font></option>
<option value="kalikiri#13.7592#78.9573"><font>కాళికిరి</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>కళ్యాణదుర్గం</font></option>
<option value="kurnool#15.8281#78.0373"><font>కర్నూలు</font></option>
<option value="madanapalle#13.5500#78.5000"><font>మదనపల్లి</font></option>
<option value="palamaner#13.2000#78.7500"><font>పాలమనేర్</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>పరచూర్</font></option>
<option value="pattikonda#14.0111#77.9342"><font>పట్టికొండ</font></option>
<option value="piduguralla#16.4833#79.8964"><font>పిడుగురళ్ల</font></option>
<option value="punganur#13.3667#78.5833"><font>పుంగనూర్</font></option>
<option value="rapur#15.5792#79.3119"><font>రాపూర్</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>రావులపాలెం</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>రాయదుర్గం</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>సత్తెనపల్లి</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>తాడికొండ</font></option>
<option value="tenali#16.2433#80.6408"><font>తెనాలి</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>వేమురు భట్టిప్రోలు</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>విజయనగరం</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>యెమ్మిగనూర్</font></option>
</select>   		    	

<!-- ------------------------------------------------------------------------ap_be------------------------------------------------------------------------------- -->

<select class="be" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>বেছে নিন (Current Loc)</font></option>
<option value="adoni#15.6322#77.2728"><font>আদোনি</font></option>
<option value="anakapalli#17.6868#83.0061"><font>অনাকাপল্লি</font></option>
<option value="ananthapuramu#14.6776#77.6068"><font>অনন্তপুরমু</font></option>
<option value="bobbili_apmc#18.5679#83.3688"><font>বব্বিলি</font></option>
<option value="chilakaluripet_apmc#16.0788#80.1642"><font>চিলাকালুরিপেট</font></option>
<option value="denduluru#16.5719#81.2124"><font>দেন্দুলুরু</font></option>
<option value="duggirala#16.5250#80.5828"><font>দুগ্গিরালা</font></option>
<option value="eluru#16.7100#81.0950"><font>এলুরু</font></option>
<option value="gopalapuram#13.5792#79.3119"><font>গোপালপুরম</font></option>
<option value="guntur#16.3067#80.4365"><font>গুন্টুর</font></option>
<option value="gurramkonda#13.5792#79.3119"><font>গুররামকোন্ডা</font></option>
<option value="hindupur#13.8281#77.4913"><font>হিন্দুপুর</font></option>
<option value="ichapuram_apmc#19.1003#84.6996"><font>ইছাপুরম</font></option>
<option value="jaggayyapet_apmc#16.8928#80.2940"><font>জগগয়াপেট</font></option>
<option value="kadapa#14.4779#78.8239"><font>কাডাপা</font></option>
<option value="kalikiri#13.7592#78.9573"><font>কালিকিরি</font></option>
<option value="kalyandurg#14.5717#78.1675"><font>কল্যাণদুর্গ</font></option>
<option value="kurnool#15.8281#78.0373"><font>কুর্নুল</font></option>
<option value="madanapalle#13.5500#78.5000"><font>মদনপল্লে</font></option>
<option value="palamaner#13.2000#78.7500"><font>পালামানের</font></option>
<option value="parchur_apmc#15.6417#80.0581"><font>পারচুর</font></option>
<option value="pattikonda#14.0111#77.9342"><font>পট্টিকোন্ডা</font></option>
<option value="piduguralla#16.4833#79.8964"><font>পিডুগুরালা</font></option>
<option value="punganur#13.3667#78.5833"><font>পুঙ্গানুর</font></option>
<option value="rapur#15.5792#79.3119"><font>রাপুর</font></option>
<option value="ravulapalem_apmc#17.0167#81.8667"><font>রাভুলাপালেম</font></option>
<option value="rayadurg_apmc#14.6847#76.8277"><font>রায়দুর্গ</font></option>
<option value="sattenapalle_apmc#16.3958#80.1496"><font>সাত্টেনাপল্লে</font></option>
<option value="tadikonda_apmc#16.2500#79.9833"><font>তাদিকোন্ডা</font></option>
<option value="tenali#16.2433#80.6408"><font>তেনালি</font></option>
<option value="vemuru_bhattiprolu#16.2462#80.8772"><font>ভেমুরু ভট্টিপ্রোলু</font></option>
<option value="vizianagaram_apmc#18.1167#83.4167"><font>বিজিয়ানগরম</font></option>
<option value="yemmiganur#15.7333#77.4833"><font>ইয়েমিগানুর</font></option>
</select> 	`;




var uttar =`
<select class="od" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">   
		<option value="currentGPS"><font>ଚୟନ କରନ୍ତୁ (Current Loc)</font></option>
		<option value="ACHHALDA_APMC#26.802242#79.506317"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଡେଇଁବା ସମୟରେ |</font></font></option>
			<option value="ACHNERA#27.1367315#77.7852505"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅଖନେରା |</font></font></option>
			<option value="AGRA#27.1795368#78.021108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଗ୍ରା</font></font></option>
			<option value="AJUHA#25.701252#81.2463763"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆସୱା</font></font></option>
			<option value="AKBARPUR#26.429907#82.53404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆକବରପୁର |</font></font></option>
			<option value="ALIGARH#27.893817#78.068131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଲିଗଡ</font></font></option>
			<option value="AMROHA_APMC#28.904436#78.467523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆମ୍ରୋହା |</font></font></option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆନନ୍ଦ ନାଗର</font></font></option>
			<option value="ATARRA_APMC#25.285155#80.569807"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଦର୍ଶ |</font></font></option>
			<option value="AURAIYA#26.4693651#79.5169385"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ତୁମେ କି?</font></font></option>
			<option value="AYODHYA#26.78555#82.20453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅଯୋଧ୍ୟା</font></font></option>
			<option value="AZAMGARH#26.0213748#83.1774796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଜାମକର</font></font></option>
			<option value="BADAUN#28.0277182#79.1362377"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପରିବର୍ତ୍ତନ କରନ୍ତୁ |</font></font></option>
		<option value="BAHRAICH#27.581814#81.6077803"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବହାରେନ ନିଜେ |</font></font></option>
			<option value="BALLIA#25.7750304#84.4151268"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାଲିଆ |</font></font></option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବଳରାମପୁର</font></font></option>
			<option value="BANDA#25.483305#80.333295"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବୃନ୍ଦା |</font></font></option>
			<option value="BANGARMAU#26.54806#80.484597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବଙ୍ଗରମା u |</font></font></option>
			<option value="BARABANKI#26.92718#81.191435"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଦଳୀୟ</font></font></option>
			<option value="BAREILLY#28.3670485#79.4304251"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବରେଲି |</font></font></option>
			<option value="BASTI#26.7800781#82.7641135"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବସ୍ତି</font></font></option>
			<option value="BHARTHANA#26.7395449#79.2395049"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଭାରତାନ</font></font></option>
			<option value="BHARUASUMERPUR#25.85314#80.11428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସୁମେରପୁର |</font></font></option>
			<option value="BILSI#28.132035#78.906977"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବଟିକା</font></font></option>
			<option value="BINDIKI#26.035672#80.572423"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପିଣ୍ଟାଗି |</font></font></option>
			<option value="BISALPUR#28.2910216#79.8118195"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବିସାଲପୁର</font></font></option>
		<option value="BULANDSHAHAR#28.411331#77.848434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବୁଲନ୍ଦଶାହର |</font></font></option>
			<option value="CHANDAULI#25.521603#79.7091278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାଣ୍ଡାଉଲି |</font></font></option>
			<option value="CHANDAUSI#28.46672#78.81205"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାଣ୍ଡାଉସି |</font></font></option>
			<option value="CHARRA#27.926672#78.398524"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଅର୍ବ</font></font></option>
			<option value="CHAUBEPUR#26.1572572#80.0772302"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚ ub ବେପୁର |</font></font></option>
			<option value="CHIBRAMAU#27.149069#79.498006"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସିବ୍ରାମାଉ |</font></font></option>
			<option value="DADRI_UP#28.550266#77.5542629"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଦାଦ୍ରି |</font></font></option>
			<option value="DEORIA#26.5139044#83.7982547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Arr ାଡ଼ା</font></font></option>
			<option value="ETAH#27.5796784#78.6509796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଠ</font></font></option>
			<option value="ETAWAH#26.7660468#79.0468436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଆଠ</font></font></option>
			<option value="FARRUKHABAD#27.40473#79.51108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଫାରୁକାବାଦ |</font></font></option>
			<option value="FATEHPUR_APMC#25.925691#80.814415"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଫତେହପୁର</font></font></option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଫତେହପୁର ସିକ୍ରି |</font></font></option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଫିରୋଜାବାଦ |</font></font></option>
			<option value="GHAZIABAD#28.652934#77.428408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗାଜିଆବାଦ</font></font></option>
			<option value="GHIROR#27.24884#78.76036"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କିରୋର |</font></font></option>
		<option value="GOLAGOKARNATH#28.10115#80.45785"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗୋଲା ଗୋକରା ନାଥ |</font></font></option>
			<option value="GONDA#27.16915#82.0027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୋଣ୍ଡା</font></font></option>
			<option value="GORAKHPUR#26.7605635#83.3731585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଗୋରଖପୁର |</font></font></option>
			<option value="HAPUR#28.8175401#77.7494573"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହାପୁର |</font></font></option>
			<option value="HARDOI#26.16499#81.21029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହାର୍ଡୋଇ |</font></font></option>
			<option value="HASANPUR_APMC#28.17469#79.70675"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହାସନପୁର</font></font></option>
			<option value="HATHRAS#27.59295#78.029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହାଡ୍ରାସ |</font></font></option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜାହାଙ୍ଗୀରବାଦ୍ |</font></font></option>
			<option value="JAIS#26.26202#81.546553"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜୟସେ |</font></font></option>
			<option value="JALALABAD_APMC#29.57122#78.27642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜଲାଲାବାଦ |</font></font></option>
			<option value="JALAUN#26.1405657#79.324545"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜାଲାନ୍ |</font></font></option>
			<option value="JANGIPURA#25.72865#82.7243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜାଙ୍ଗିପୁରା |</font></font></option>
			<option value="JAUNPUR_APMC#25.730007#82.679993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜ un ନପୁର |</font></font></option>
			<option value="JHANSI#25.4526633#78.6080622"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଜାନସୀ</font></font></option>
			<option value="KAIMGANJ#27.844#78.75705"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାୟାମଗଞ୍ଜ |</font></font></option>
			<option value="KANNAUJ#27.09571#79.90982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କନ୍ନ uj ଜ</font></font></option>
			<option value="KANPUR#26.0493334#80.6598985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କାନପୁର</font></font></option>
			<option value="KARWI_APMC#25.4194#81.09424"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବକ୍ର</font></font></option>
			<option value="KASGANJ#27.8272616#78.6496044"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କସଗଞ୍ଜ</font></font></option>
			<option value="KHAIR#27.941143#77.8397849"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବହୁତ ବଢିଆ</font></font></option>
			<option value="KHALILABAD#26.77501#83.07359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଖାଲିଲାବାଦ |</font></font></option>
			<option value="KHURJA#28.3247584#77.8367167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଚେୟାର</font></font></option>
			<option value="KONCH#25.98365#79.133"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶଙ୍ଖ</font></font></option>
			<option value="KOPAGANJ#26.0342#83.5511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୋପାଗଞ୍ଜ</font></font></option>
			<option value="KOSIKALAN#27.82713#77.40811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">କୋଜିକୋଡେ |</font></font></option>
			<option value="LAKHIMPUR#27.92587#80.81672"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଲକ୍ଷ୍ମୀପୁର</font></font></option>
			<option value="LALITPUR#25.9084#83.42075"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଲଲିତପୁର</font></font></option>
			<option value="LUCKNOW#26.87675#80.92005"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଲକ୍ଷ୍ନ now |</font></font></option>
			<option value="MADHOGANJ#27.3271041#80.4274309"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Madhoganj</font></font></option>
			<option value="MAHMUDABAD#27.33221#81.21186"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମହମୁଦାବାଦ</font></font></option>
			<option value="MAHOBA#25.4920172#79.7903853"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମହୋବା</font></font></option>
			<option value="MAINPURI#27.230008#79.019992"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମୁଖ୍ୟ ବୁରି</font></font></option>
			<option value="MATHURA#27.493375#77.6716801"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମଥୁରା |</font></font></option>
			<option value="MAURANIPUR#25.237915#79.135153"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମ our ରାନିପୁର |</font></font></option>
			<option value="MEERUT#28.9844728#77.7064027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମେରୁଟ୍ |</font></font></option>
			<option value="MILAK#28.6124635#79.1642839"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମିଲାଗ୍</font></font></option>
			<option value="MIRZAPUR#25.1337117#82.5644214"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମିର୍ଜାପୁର</font></font></option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମହମ୍ମଦାବାଦ</font></font></option>
			<option value="MORADABAD#28.8379255#78.7490039"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମୋରାଡାବାଦ |</font></font></option>
			<option value="MUSKERA#25.666674#79.799993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ହସ</font></font></option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ମୁଜାଫରନଗର</font></font></option>
			<option value="NAANPARA#27.8546659#81.5115957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନମସ୍କାର</font></font></option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନଜୀବବାଦ୍</font></font></option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନାଉଗର |</font></font></option>
			<option value="NAUTANWA_APMC#27.424646#83.420123"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନୂତନ</font></font></option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନବାବଗଞ୍ଜ |</font></font></option>
			<option value="NOIDA_APMC#28.5355211#77.3910215"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ନୋଏଡା |</font></font></option>
			<option value="PALIA_KALAN#28.5328#80.57575"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାଲିଆ କାଲା |</font></font></option>
		<option value="PARTAWAL#26.9682847#83.6015668"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପ୍ରତ୍ୟାହାର</font></font></option>
			<option value="PILIBHIT#28.5979445#79.8040465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଫିଲିପିଥ୍ |</font></font></option>
			<option value="POWAYAN#27.99525#80.08025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାକ୍ଷୀ</font></font></option>
			<option value="PRATAPGARH#25.9153562#81.9793796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପ୍ରତାପକର</font></font></option>
			<option value="PRAYAGRAJ#25.473034#81.878357"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପ୍ରାର୍ଥନା</font></font></option>
			<option value="PURANPUR#28.520457#80.1417034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ପୁରୋରପୁର</font></font></option>
			<option value="RAE_BARELI#26.230299#81.240891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାବେରେଲି |</font></font></option>
			<option value="RAMPUR#28.7735815#79.018902"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାମପୁର |</font></font></option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରାମପୁର ବିଲାସପୁର |</font></font></option>
			<option value="RASRA_APMC#25.8564239#83.8636319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରସ</font></font></option>
			<option value="RATH#25.56546#79.60713"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରଥ</font></font></option>
		<option value="ROBERTSGANJ#24.6827709#83.065602"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରୋବର୍ଟସଗଞ୍ଜ |</font></font></option>
			<option value="SADABAD_APMC#27.439864#78.034994"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାଦାବାଦ |</font></font></option>
			<option value="SAFDARGANJ#26.931618#81.20224"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସଫଦରଗଞ୍ଜ |</font></font></option>
			<option value="SAHARANPUR#29.90313#77.52243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାହାରନପୁର |</font></font></option>
			<option value="Sahiyapur#27.3821#82.49045"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସାହିପୁର |</font></font></option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସହଜରେ |</font></font></option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଯତ୍ନର ସହିତ |</font></font></option>
		<option value="SANDILA_APMC#27.0701072#80.5198747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ରବିବାର</font></font></option>
			<option value="SHAGANJ#26.04347#82.60407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶାହାଗଞ୍ଜ |</font></font></option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶାହାବାଦ ହାର୍ଡୋଇ |</font></font></option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶାହାଜାହାନପୁର |</font></font></option>
			<option value="SHAMLI#29.450137#77.312206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶାମଲି |</font></font></option>
		<option value="SHIKOHABAD#27.0859419#78.5780237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଶିକୋହାବାଦ |</font></font></option>
			<option value="SIRSAGANJ#27.0736184#78.6528146"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସିରସାଗଞ୍ଜ |</font></font></option>
			<option value="SITAPUR#27.5829004#80.6710501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସୀତାପୁର</font></font></option>
			<option value="SULTANPUR#26.26577#82.0751"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସୁଲତାନପୁର</font></font></option>
			<option value="TIKUNIYA#28.381337#80.966576"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ତିକୁନିଆ |</font></font></option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ତୁଲସିପୁର</font></font></option>
			<option value="TUNDLA#27.1591066#78.3957514"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ସଂଯୋଗ ବିଚ୍ଛିନ୍ନ ହୋଇଛି |</font></font></option>
			<option value="UJHANI#27.96991#78.9767"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଉସାନି |</font></font></option>
			<option value="UNNAO_APMC#26.5475336#80.4882166"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଉନ୍ନାଓ |</font></font></option>
			<option value="URAI#26.00165#79.49465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ଲିଭୋପା</font></font></option>
			<option value="VARANASI#25.3045#83.00395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ବାରାଣାସୀ |</font></font></option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ୱାଜିରଗଞ୍ଜ</font></font></option>
</select>

<!-- -----------------------------------------------------------------------------up_mr --------------------------------------------------------------------->

<select class="mr" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>निवडा (Current Loc)</font></option>
<option value="ACHHALDA_APMC#26.802242#79.506317"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उडी मारताना</font></font></option>
			<option value="ACHNERA#27.1367315#77.7852505"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आचनेरा</font></font></option>
			<option value="AGRA#27.1795368#78.021108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आग्रा</font></font></option>
			<option value="AJUHA#25.701252#81.2463763"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अस्वा</font></font></option>
			<option value="AKBARPUR#26.429907#82.53404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अकबरपूर</font></font></option>
			<option value="ALIGARH#27.893817#78.068131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अलीगढ</font></font></option>
			<option value="AMROHA_APMC#28.904436#78.467523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अमरोहा</font></font></option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आनंद नगर</font></font></option>
			<option value="ATARRA_APMC#25.285155#80.569807"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अडरा</font></font></option>
			<option value="AURAIYA#26.4693651#79.5169385"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आपण आहात?</font></font></option>
			<option value="AYODHYA#26.78555#82.20453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अयोध्या</font></font></option>
			<option value="AZAMGARH#26.0213748#83.1774796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आझमकर</font></font></option>
			<option value="BADAUN#28.0277182#79.1362377"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बदला</font></font></option>
		<option value="BAHRAICH#27.581814#81.6077803"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहरीन स्वतः</font></font></option>
			<option value="BALLIA#25.7750304#84.4151268"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलिया</font></font></option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलरामपूर</font></font></option>
			<option value="BANDA#25.483305#80.333295"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बांदा</font></font></option>
			<option value="BANGARMAU#26.54806#80.484597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बांगरमाऊ</font></font></option>
			<option value="BARABANKI#26.92718#81.191435"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पक्षपाती</font></font></option>
			<option value="BAREILLY#28.3670485#79.4304251"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बरेली</font></font></option>
			<option value="BASTI#26.7800781#82.7641135"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बस्ती</font></font></option>
			<option value="BHARTHANA#26.7395449#79.2395049"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भरथन</font></font></option>
			<option value="BHARUASUMERPUR#25.85314#80.11428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुमेरपूर</font></font></option>
			<option value="BILSI#28.132035#78.906977"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोळ्या</font></font></option>
			<option value="BINDIKI#26.035672#80.572423"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पिंटगी</font></font></option>
			<option value="BISALPUR#28.2910216#79.8118195"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बिसलपूर</font></font></option>
		<option value="BULANDSHAHAR#28.411331#77.848434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बुलंदशहर</font></font></option>
			<option value="CHANDAULI#25.521603#79.7091278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सांडौली</font></font></option>
			<option value="CHANDAUSI#28.46672#78.81205"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सांडौसी</font></font></option>
			<option value="CHARRA#27.926672#78.398524"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ओर्ब</font></font></option>
			<option value="CHAUBEPUR#26.1572572#80.0772302"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चौबेपूर</font></font></option>
			<option value="CHIBRAMAU#27.149069#79.498006"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिब्रामाळ</font></font></option>
			<option value="DADRI_UP#28.550266#77.5542629"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">दादरी</font></font></option>
			<option value="DEORIA#26.5139044#83.7982547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अतिसार</font></font></option>
			<option value="ETAH#27.5796784#78.6509796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आठ</font></font></option>
			<option value="ETAWAH#26.7660468#79.0468436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आठ</font></font></option>
			<option value="FARRUKHABAD#27.40473#79.51108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फारुखाबाद</font></font></option>
			<option value="FATEHPUR_APMC#25.925691#80.814415"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फतेहपूर</font></font></option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फतेहपूर सिक्री</font></font></option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फिरोजाबाद</font></font></option>
			<option value="GHAZIABAD#28.652934#77.428408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गाझियाबाद</font></font></option>
			<option value="GHIROR#27.24884#78.76036"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">किरोर</font></font></option>
		<option value="GOLAGOKARNATH#28.10115#80.45785"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोळा गोकरा नाथ</font></font></option>
			<option value="GONDA#27.16915#82.0027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोंडा</font></font></option>
			<option value="GORAKHPUR#26.7605635#83.3731585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोरखपूर</font></font></option>
			<option value="HAPUR#28.8175401#77.7494573"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हापूर</font></font></option>
			<option value="HARDOI#26.16499#81.21029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हरदोई</font></font></option>
			<option value="HASANPUR_APMC#28.17469#79.70675"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हसनपूर</font></font></option>
			<option value="HATHRAS#27.59295#78.029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हद्रस</font></font></option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जहांगीराबाद</font></font></option>
			<option value="JAIS#26.26202#81.546553"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जेसे</font></font></option>
			<option value="JALALABAD_APMC#29.57122#78.27642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जलालाबाद</font></font></option>
			<option value="JALAUN#26.1405657#79.324545"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जालान</font></font></option>
			<option value="JANGIPURA#25.72865#82.7243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">झांगीपुरा</font></font></option>
			<option value="JAUNPUR_APMC#25.730007#82.679993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जौनपूर</font></font></option>
			<option value="JHANSI#25.4526633#78.6080622"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">झाशी</font></font></option>
			<option value="KAIMGANJ#27.844#78.75705"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कायमगंज</font></font></option>
			<option value="KANNAUJ#27.09571#79.90982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कन्नौज</font></font></option>
			<option value="KANPUR#26.0493334#80.6598985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कानपूर</font></font></option>
			<option value="KARWI_APMC#25.4194#81.09424"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वक्र</font></font></option>
			<option value="KASGANJ#27.8272616#78.6496044"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कासगंज</font></font></option>
			<option value="KHAIR#27.941143#77.8397849"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चांगले केले</font></font></option>
			<option value="KHALILABAD#26.77501#83.07359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खलीलाबाद</font></font></option>
			<option value="KHURJA#28.3247584#77.8367167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खुर्ची</font></font></option>
			<option value="KONCH#25.98365#79.133"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शंख</font></font></option>
			<option value="KOPAGANJ#26.0342#83.5511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोपगंज</font></font></option>
			<option value="KOSIKALAN#27.82713#77.40811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोझिकोडे</font></font></option>
			<option value="LAKHIMPUR#27.92587#80.81672"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लखीमपूर</font></font></option>
			<option value="LALITPUR#25.9084#83.42075"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ललितपूर</font></font></option>
			<option value="LUCKNOW#26.87675#80.92005"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लखनौ</font></font></option>
			<option value="MADHOGANJ#27.3271041#80.4274309"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">माधोगंज</font></font></option>
			<option value="MAHMUDABAD#27.33221#81.21186"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">महमुदाबाद</font></font></option>
			<option value="MAHOBA#25.4920172#79.7903853"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">महोबा</font></font></option>
			<option value="MAINPURI#27.230008#79.019992"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुख्य बुरी</font></font></option>
			<option value="MATHURA#27.493375#77.6716801"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मथुरा</font></font></option>
			<option value="MAURANIPUR#25.237915#79.135153"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुराणीपूर</font></font></option>
			<option value="MEERUT#28.9844728#77.7064027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मेरठ</font></font></option>
			<option value="MILAK#28.6124635#79.1642839"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिलाग</font></font></option>
			<option value="MIRZAPUR#25.1337117#82.5644214"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिर्झापूर</font></font></option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मोहम्मदाबाद</font></font></option>
			<option value="MORADABAD#28.8379255#78.7490039"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुरादाबाद</font></font></option>
			<option value="MUSKERA#25.666674#79.799993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">स्मित</font></font></option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुझफ्फरनगर</font></font></option>
			<option value="NAANPARA#27.8546659#81.5115957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नमस्कार</font></font></option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नजीबाबाद</font></font></option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नागर</font></font></option>
			<option value="NAUTANWA_APMC#27.424646#83.420123"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नवीन</font></font></option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नवाबगंज</font></font></option>
			<option value="NOIDA_APMC#28.5355211#77.3910215"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नोएडा</font></font></option>
			<option value="PALIA_KALAN#28.5328#80.57575"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बालिया कला</font></font></option>
		<option value="PARTAWAL#26.9682847#83.6015668"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पैसे काढणे</font></font></option>
			<option value="PILIBHIT#28.5979445#79.8040465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फिलीपिथ</font></font></option>
			<option value="POWAYAN#27.99525#80.08025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">साक्षीदार</font></font></option>
			<option value="PRATAPGARH#25.9153562#81.9793796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">प्रतापकर</font></font></option>
			<option value="PRAYAGRAJ#25.473034#81.878357"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">प्रयागराज</font></font></option>
			<option value="PURANPUR#28.520457#80.1417034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पूरणपूर</font></font></option>
			<option value="RAE_BARELI#26.230299#81.240891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायबरेली</font></font></option>
			<option value="RAMPUR#28.7735815#79.018902"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामपूर</font></font></option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामपूर बिलासपूर</font></font></option>
			<option value="RASRA_APMC#25.8564239#83.8636319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रस</font></font></option>
			<option value="RATH#25.56546#79.60713"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रथ</font></font></option>
		<option value="ROBERTSGANJ#24.6827709#83.065602"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रॉबर्टसगंज</font></font></option>
			<option value="SADABAD_APMC#27.439864#78.034994"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सादाबाद</font></font></option>
			<option value="SAFDARGANJ#26.931618#81.20224"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सफदरगंज</font></font></option>
			<option value="SAHARANPUR#29.90313#77.52243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहारनपूर</font></font></option>
			<option value="Sahiyapur#27.3821#82.49045"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहियापूर</font></font></option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहज</font></font></option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">काळजीपूर्वक</font></font></option>
		<option value="SANDILA_APMC#27.0701072#80.5198747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रविवार</font></font></option>
			<option value="SHAGANJ#26.04347#82.60407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शहागंज</font></font></option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शहााबाद हरदोई</font></font></option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शहाजहानपूर</font></font></option>
			<option value="SHAMLI#29.450137#77.312206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शामली</font></font></option>
		<option value="SHIKOHABAD#27.0859419#78.5780237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिकोहाबाद</font></font></option>
			<option value="SIRSAGANJ#27.0736184#78.6528146"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिरसागंज</font></font></option>
			<option value="SITAPUR#27.5829004#80.6710501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सीतापूर</font></font></option>
			<option value="SULTANPUR#26.26577#82.0751"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुलतानपूर</font></font></option>
			<option value="TIKUNIYA#28.381337#80.966576"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ठिकुन्या</font></font></option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तुळशीपूर</font></font></option>
			<option value="TUNDLA#27.1591066#78.3957514"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डिस्कनेक्ट</font></font></option>
			<option value="UJHANI#27.96991#78.9767"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उसानी</font></font></option>
			<option value="UNNAO_APMC#26.5475336#80.4882166"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उन्नाव</font></font></option>
			<option value="URAI#26.00165#79.49465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लिफाफा</font></font></option>
			<option value="VARANASI#25.3045#83.00395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वाराणसी</font></font></option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वजीरगंज</font></font></option>

</select>

<!-- -----------------------------------------------------------------up_be---------------------------------------------------------------------------------------------- -->
<select class="be" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="ACHHALDA_APMC#26.802242#79.506317"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">লাফানোর সময়</font></font></option>
			<option value="ACHNERA#27.1367315#77.7852505"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আছনেরা</font></font></option>
			<option value="AGRA#27.1795368#78.021108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আগ্রা</font></font></option>
			<option value="AJUHA#25.701252#81.2463763"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আসওয়া</font></font></option>
			<option value="AKBARPUR#26.429907#82.53404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আকবরপুর</font></font></option>
			<option value="ALIGARH#27.893817#78.068131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আলীগড়</font></font></option>
			<option value="AMROHA_APMC#28.904436#78.467523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আমরোহা</font></font></option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আনন্দ নগর</font></font></option>
			<option value="ATARRA_APMC#25.285155#80.569807"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আদরা</font></font></option>
			<option value="AURAIYA#26.4693651#79.5169385"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আপনি?</font></font></option>
			<option value="AYODHYA#26.78555#82.20453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">অযোধ্যা</font></font></option>
			<option value="AZAMGARH#26.0213748#83.1774796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আজমকার</font></font></option>
			<option value="BADAUN#28.0277182#79.1362377"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পরিবর্তন</font></font></option>
		<option value="BAHRAICH#27.581814#81.6077803"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বাহরাইন নিজেই</font></font></option>
			<option value="BALLIA#25.7750304#84.4151268"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বালিয়া</font></font></option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বলরামপুর</font></font></option>
			<option value="BANDA#25.483305#80.333295"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বান্দা</font></font></option>
			<option value="BANGARMAU#26.54806#80.484597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বাঙ্গারমাউ</font></font></option>
			<option value="BARABANKI#26.92718#81.191435"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পক্ষপাতমূলক</font></font></option>
			<option value="BAREILLY#28.3670485#79.4304251"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বেরেলি</font></font></option>
			<option value="BASTI#26.7800781#82.7641135"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বস্তি</font></font></option>
			<option value="BHARTHANA#26.7395449#79.2395049"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ভরথান</font></font></option>
			<option value="BHARUASUMERPUR#25.85314#80.11428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সুমেরপুর</font></font></option>
			<option value="BILSI#28.132035#78.906977"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বড়ি</font></font></option>
			<option value="BINDIKI#26.035672#80.572423"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পিন্টাগী</font></font></option>
			<option value="BISALPUR#28.2910216#79.8118195"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বিসালপুর</font></font></option>
		<option value="BULANDSHAHAR#28.411331#77.848434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বুলন্দশহর</font></font></option>
			<option value="CHANDAULI#25.521603#79.7091278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সান্দাউলি</font></font></option>
			<option value="CHANDAUSI#28.46672#78.81205"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সান্দাউসি</font></font></option>
			<option value="CHARRA#27.926672#78.398524"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">অর্ব</font></font></option>
			<option value="CHAUBEPUR#26.1572572#80.0772302"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চৌবেপুর</font></font></option>
			<option value="CHIBRAMAU#27.149069#79.498006"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সিব্রামউ</font></font></option>
			<option value="DADRI_UP#28.550266#77.5542629"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">দাদরি</font></font></option>
			<option value="DEORIA#26.5139044#83.7982547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ডায়রিয়া</font></font></option>
			<option value="ETAH#27.5796784#78.6509796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আট</font></font></option>
			<option value="ETAWAH#26.7660468#79.0468436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">আট</font></font></option>
			<option value="FARRUKHABAD#27.40473#79.51108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ফারুকবাদ</font></font></option>
			<option value="FATEHPUR_APMC#25.925691#80.814415"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ফতেহপুর</font></font></option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ফতেপুর সিক্রি</font></font></option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ফিরোজাবাদ</font></font></option>
			<option value="GHAZIABAD#28.652934#77.428408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গাজিয়াবাদ</font></font></option>
			<option value="GHIROR#27.24884#78.76036"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কিরোর</font></font></option>
		<option value="GOLAGOKARNATH#28.10115#80.45785"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গোলা গোকরা নাথ</font></font></option>
			<option value="GONDA#27.16915#82.0027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কোন্ডা</font></font></option>
			<option value="GORAKHPUR#26.7605635#83.3731585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">গোরখপুর</font></font></option>
			<option value="HAPUR#28.8175401#77.7494573"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হাপুর</font></font></option>
			<option value="HARDOI#26.16499#81.21029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হারদোই</font></font></option>
			<option value="HASANPUR_APMC#28.17469#79.70675"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হাসানপুর</font></font></option>
			<option value="HATHRAS#27.59295#78.029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হাধরাস</font></font></option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জাহাঙ্গিরাবাদ</font></font></option>
			<option value="JAIS#26.26202#81.546553"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জেইস</font></font></option>
			<option value="JALALABAD_APMC#29.57122#78.27642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জালালাবাদ</font></font></option>
			<option value="JALAUN#26.1405657#79.324545"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জালান</font></font></option>
			<option value="JANGIPURA#25.72865#82.7243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জাঙ্গিপুরা</font></font></option>
			<option value="JAUNPUR_APMC#25.730007#82.679993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">জৌনপুর</font></font></option>
			<option value="JHANSI#25.4526633#78.6080622"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ঝাঁসি</font></font></option>
			<option value="KAIMGANJ#27.844#78.75705"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কেয়ামগঞ্জ</font></font></option>
			<option value="KANNAUJ#27.09571#79.90982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কনৌজ</font></font></option>
			<option value="KANPUR#26.0493334#80.6598985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কানপুর</font></font></option>
			<option value="KARWI_APMC#25.4194#81.09424"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বক্ররেখা</font></font></option>
			<option value="KASGANJ#27.8272616#78.6496044"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কাসগঞ্জ</font></font></option>
			<option value="KHAIR#27.941143#77.8397849"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সাবাশ</font></font></option>
			<option value="KHALILABAD#26.77501#83.07359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">খলিলাবাদ</font></font></option>
			<option value="KHURJA#28.3247584#77.8367167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">চেয়ার</font></font></option>
			<option value="KONCH#25.98365#79.133"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শঙ্খ</font></font></option>
			<option value="KOPAGANJ#26.0342#83.5511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কোপাগঞ্জ</font></font></option>
			<option value="KOSIKALAN#27.82713#77.40811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">কোঝিকোড়</font></font></option>
			<option value="LAKHIMPUR#27.92587#80.81672"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">লখিমপুর</font></font></option>
			<option value="LALITPUR#25.9084#83.42075"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ললিতপুর</font></font></option>
			<option value="LUCKNOW#26.87675#80.92005"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">লখনউ</font></font></option>
			<option value="MADHOGANJ#27.3271041#80.4274309"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মাধোগঞ্জ</font></font></option>
			<option value="MAHMUDABAD#27.33221#81.21186"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মাহমুদাবাদ</font></font></option>
			<option value="MAHOBA#25.4920172#79.7903853"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মহোবা</font></font></option>
			<option value="MAINPURI#27.230008#79.019992"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">প্রধান বুড়ি</font></font></option>
			<option value="MATHURA#27.493375#77.6716801"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মথুরা</font></font></option>
			<option value="MAURANIPUR#25.237915#79.135153"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মুরানীপুর</font></font></option>
			<option value="MEERUT#28.9844728#77.7064027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মিরাট</font></font></option>
			<option value="MILAK#28.6124635#79.1642839"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মিলাগ</font></font></option>
			<option value="MIRZAPUR#25.1337117#82.5644214"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মির্জাপুর</font></font></option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মোহাম্মদবাদ</font></font></option>
			<option value="MORADABAD#28.8379255#78.7490039"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মোরাদাবাদ</font></font></option>
			<option value="MUSKERA#25.666674#79.799993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হাসি</font></font></option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">মুজাফফরনগর</font></font></option>
			<option value="NAANPARA#27.8546659#81.5115957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">হ্যালো</font></font></option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নাজিবাবাদ</font></font></option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নাগর</font></font></option>
			<option value="NAUTANWA_APMC#27.424646#83.420123"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নতুন</font></font></option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নবাবগঞ্জ</font></font></option>
			<option value="NOIDA_APMC#28.5355211#77.3910215"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">নয়ডা</font></font></option>
			<option value="PALIA_KALAN#28.5328#80.57575"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বালিয়া কালা</font></font></option>
		<option value="PARTAWAL#26.9682847#83.6015668"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">উত্তোলন</font></font></option>
			<option value="PILIBHIT#28.5979445#79.8040465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ফিলিপিথ</font></font></option>
			<option value="POWAYAN#27.99525#80.08025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সাক্ষী</font></font></option>
			<option value="PRATAPGARH#25.9153562#81.9793796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">প্রতাপকর</font></font></option>
			<option value="PRAYAGRAJ#25.473034#81.878357"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">প্রয়াগরাজ</font></font></option>
			<option value="PURANPUR#28.520457#80.1417034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">পুরানপুর</font></font></option>
			<option value="RAE_BARELI#26.230299#81.240891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রায়বরেলি</font></font></option>
			<option value="RAMPUR#28.7735815#79.018902"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রামপুর</font></font></option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রামপুর বিলাসপুর</font></font></option>
			<option value="RASRA_APMC#25.8564239#83.8636319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রস</font></font></option>
			<option value="RATH#25.56546#79.60713"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রথ</font></font></option>
		<option value="ROBERTSGANJ#24.6827709#83.065602"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রবার্টসগঞ্জ</font></font></option>
			<option value="SADABAD_APMC#27.439864#78.034994"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সাদাবাদ</font></font></option>
			<option value="SAFDARGANJ#26.931618#81.20224"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সফদরগঞ্জ</font></font></option>
			<option value="SAHARANPUR#29.90313#77.52243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সাহারানপুর</font></font></option>
			<option value="Sahiyapur#27.3821#82.49045"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সহিয়াপুর</font></font></option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সহজে</font></font></option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সাবধানে</font></font></option>
		<option value="SANDILA_APMC#27.0701072#80.5198747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">রবিবার</font></font></option>
			<option value="SHAGANJ#26.04347#82.60407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শাহগঞ্জ</font></font></option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শাহাবাদ হারদোই</font></font></option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শাহজাহানপুর</font></font></option>
			<option value="SHAMLI#29.450137#77.312206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শামলি</font></font></option>
		<option value="SHIKOHABAD#27.0859419#78.5780237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">শিকোহাবাদ</font></font></option>
			<option value="SIRSAGANJ#27.0736184#78.6528146"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সিরসাগঞ্জ</font></font></option>
			<option value="SITAPUR#27.5829004#80.6710501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সীতাপুর</font></font></option>
			<option value="SULTANPUR#26.26577#82.0751"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সুলতানপুর</font></font></option>
			<option value="TIKUNIYA#28.381337#80.966576"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">থিকুনিয়া</font></font></option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">তুলসীপুর</font></font></option>
			<option value="TUNDLA#27.1591066#78.3957514"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">সংযোগ বিচ্ছিন্ন</font></font></option>
			<option value="UJHANI#27.96991#78.9767"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">উসানি</font></font></option>
			<option value="UNNAO_APMC#26.5475336#80.4882166"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">উন্নাও</font></font></option>
			<option value="URAI#26.00165#79.49465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">খাম</font></font></option>
			<option value="VARANASI#25.3045#83.00395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">বারাণসী</font></font></option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">উজিরগঞ্জ</font></font></option>
</select>


<!-- -----------------------------------------------------------------------------------------up_hi------------------------------------------------------------------- -->

<select class="hi" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>चुनें (Current Loc)</font></option>
<option value="ACHHALDA_APMC#26.802242#79.506317"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कूदते समय</font></font></option>
			<option value="ACHNERA#27.1367315#77.7852505"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अछनेरा</font></font></option>
			<option value="AGRA#27.1795368#78.021108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आगरा</font></font></option>
			<option value="AJUHA#25.701252#81.2463763"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">असवा</font></font></option>
			<option value="AKBARPUR#26.429907#82.53404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अकबरपुर</font></font></option>
			<option value="ALIGARH#27.893817#78.068131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अलीगढ</font></font></option>
			<option value="AMROHA_APMC#28.904436#78.467523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अमरोहा</font></font></option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आनंद नगर</font></font></option>
			<option value="ATARRA_APMC#25.285155#80.569807"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अदर्रा</font></font></option>
			<option value="AURAIYA#26.4693651#79.5169385"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">क्या आप?</font></font></option>
			<option value="AYODHYA#26.78555#82.20453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अयोध्या</font></font></option>
			<option value="AZAMGARH#26.0213748#83.1774796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आजमकर</font></font></option>
			<option value="BADAUN#28.0277182#79.1362377"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">परिवर्तन</font></font></option>
		<option value="BAHRAICH#27.581814#81.6077803"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहरीन ही</font></font></option>
			<option value="BALLIA#25.7750304#84.4151268"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलिया</font></font></option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलरामपुर</font></font></option>
			<option value="BANDA#25.483305#80.333295"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बाँदा</font></font></option>
			<option value="BANGARMAU#26.54806#80.484597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बांगरमऊ</font></font></option>
			<option value="BARABANKI#26.92718#81.191435"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पक्षपातपूर्ण</font></font></option>
			<option value="BAREILLY#28.3670485#79.4304251"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बरेली</font></font></option>
			<option value="BASTI#26.7800781#82.7641135"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बस्ती</font></font></option>
			<option value="BHARTHANA#26.7395449#79.2395049"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भारतन</font></font></option>
			<option value="BHARUASUMERPUR#25.85314#80.11428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुमेरपुर</font></font></option>
			<option value="BILSI#28.132035#78.906977"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोलियाँ</font></font></option>
			<option value="BINDIKI#26.035672#80.572423"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पिंटागी</font></font></option>
			<option value="BISALPUR#28.2910216#79.8118195"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बीसलपुर</font></font></option>
		<option value="BULANDSHAHAR#28.411331#77.848434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बुलन्दशहर</font></font></option>
			<option value="CHANDAULI#25.521603#79.7091278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संदौली</font></font></option>
			<option value="CHANDAUSI#28.46672#78.81205"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संदौसी</font></font></option>
			<option value="CHARRA#27.926672#78.398524"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोला</font></font></option>
			<option value="CHAUBEPUR#26.1572572#80.0772302"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चौबेपुर</font></font></option>
			<option value="CHIBRAMAU#27.149069#79.498006"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिबरामऊ</font></font></option>
			<option value="DADRI_UP#28.550266#77.5542629"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">दादरी</font></font></option>
			<option value="DEORIA#26.5139044#83.7982547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">दस्त</font></font></option>
			<option value="ETAH#27.5796784#78.6509796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आठ</font></font></option>
			<option value="ETAWAH#26.7660468#79.0468436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आठ</font></font></option>
			<option value="FARRUKHABAD#27.40473#79.51108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फारुखाबाद</font></font></option>
			<option value="FATEHPUR_APMC#25.925691#80.814415"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फ़तेहपुर</font></font></option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फ़तेहपुर सीकरी</font></font></option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फिरोजाबाद</font></font></option>
			<option value="GHAZIABAD#28.652934#77.428408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गाज़ियाबाद</font></font></option>
			<option value="GHIROR#27.24884#78.76036"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">किरोर</font></font></option>
		<option value="GOLAGOKARNATH#28.10115#80.45785"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोला गोकरनाथ</font></font></option>
			<option value="GONDA#27.16915#82.0027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोंडा</font></font></option>
			<option value="GORAKHPUR#26.7605635#83.3731585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोरखपुर</font></font></option>
			<option value="HAPUR#28.8175401#77.7494573"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हापुड़</font></font></option>
			<option value="HARDOI#26.16499#81.21029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हरदोई</font></font></option>
			<option value="HASANPUR_APMC#28.17469#79.70675"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हसनपुर</font></font></option>
			<option value="HATHRAS#27.59295#78.029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hadhras</font></font></option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जहांगीराबाद</font></font></option>
			<option value="JAIS#26.26202#81.546553"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जयस</font></font></option>
			<option value="JALALABAD_APMC#29.57122#78.27642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जलालाबाद</font></font></option>
			<option value="JALAUN#26.1405657#79.324545"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जालान</font></font></option>
			<option value="JANGIPURA#25.72865#82.7243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जंगीपुरा</font></font></option>
			<option value="JAUNPUR_APMC#25.730007#82.679993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जौनपुर</font></font></option>
			<option value="JHANSI#25.4526633#78.6080622"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">झांसी</font></font></option>
			<option value="KAIMGANJ#27.844#78.75705"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कायमगंज</font></font></option>
			<option value="KANNAUJ#27.09571#79.90982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कन्नौज</font></font></option>
			<option value="KANPUR#26.0493334#80.6598985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कानपुर</font></font></option>
			<option value="KARWI_APMC#25.4194#81.09424"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वक्र</font></font></option>
			<option value="KASGANJ#27.8272616#78.6496044"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कासगंज</font></font></option>
			<option value="KHAIR#27.941143#77.8397849"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहुत अच्छा</font></font></option>
			<option value="KHALILABAD#26.77501#83.07359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खलीलाबाद</font></font></option>
			<option value="KHURJA#28.3247584#77.8367167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुर्सी</font></font></option>
			<option value="KONCH#25.98365#79.133"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शंख</font></font></option>
			<option value="KOPAGANJ#26.0342#83.5511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोपागंज</font></font></option>
			<option value="KOSIKALAN#27.82713#77.40811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोझिकोड</font></font></option>
			<option value="LAKHIMPUR#27.92587#80.81672"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लखीमपुर</font></font></option>
			<option value="LALITPUR#25.9084#83.42075"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lalitpur</font></font></option>
			<option value="LUCKNOW#26.87675#80.92005"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लखनऊ</font></font></option>
			<option value="MADHOGANJ#27.3271041#80.4274309"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">माधोगंज</font></font></option>
			<option value="MAHMUDABAD#27.33221#81.21186"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">महमूदाबाद</font></font></option>
			<option value="MAHOBA#25.4920172#79.7903853"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">महोबा</font></font></option>
			<option value="MAINPURI#27.230008#79.019992"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुख्य बुरी</font></font></option>
			<option value="MATHURA#27.493375#77.6716801"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मथुरा</font></font></option>
			<option value="MAURANIPUR#25.237915#79.135153"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मऊरानीपुर</font></font></option>
			<option value="MEERUT#28.9844728#77.7064027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मेरठ</font></font></option>
			<option value="MILAK#28.6124635#79.1642839"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिलाग</font></font></option>
			<option value="MIRZAPUR#25.1337117#82.5644214"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिर्जापुर</font></font></option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मोहम्मदाबाद</font></font></option>
			<option value="MORADABAD#28.8379255#78.7490039"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुरादाबाद</font></font></option>
			<option value="MUSKERA#25.666674#79.799993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुस्कान</font></font></option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुजफ्फरनगर</font></font></option>
			<option value="NAANPARA#27.8546659#81.5115957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नमस्ते</font></font></option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नजीबाबाद</font></font></option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नौगर</font></font></option>
			<option value="NAUTANWA_APMC#27.424646#83.420123"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नया</font></font></option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नवाबगंज</font></font></option>
			<option value="NOIDA_APMC#28.5355211#77.3910215"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नोएडा</font></font></option>
			<option value="PALIA_KALAN#28.5328#80.57575"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलिया कला</font></font></option>
		<option value="PARTAWAL#26.9682847#83.6015668"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">निकासी</font></font></option>
			<option value="PILIBHIT#28.5979445#79.8040465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फ़िलिपिथ</font></font></option>
			<option value="POWAYAN#27.99525#80.08025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गवाहों</font></font></option>
			<option value="PRATAPGARH#25.9153562#81.9793796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">प्रतापकर</font></font></option>
			<option value="PRAYAGRAJ#25.473034#81.878357"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">प्रयागराज</font></font></option>
			<option value="PURANPUR#28.520457#80.1417034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पूरनपुर</font></font></option>
			<option value="RAE_BARELI#26.230299#81.240891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायबरेली</font></font></option>
			<option value="RAMPUR#28.7735815#79.018902"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामपुर</font></font></option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामपुर बिलासपुर</font></font></option>
			<option value="RASRA_APMC#25.8564239#83.8636319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रस</font></font></option>
			<option value="RATH#25.56546#79.60713"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रथ</font></font></option>
		<option value="ROBERTSGANJ#24.6827709#83.065602"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रोबेर्त्स्गंज</font></font></option>
			<option value="SADABAD_APMC#27.439864#78.034994"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सादाबाद</font></font></option>
			<option value="SAFDARGANJ#26.931618#81.20224"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सफदरगंज</font></font></option>
			<option value="SAHARANPUR#29.90313#77.52243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहारनपुर</font></font></option>
			<option value="Sahiyapur#27.3821#82.49045"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहियापुर</font></font></option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आसानी से</font></font></option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सावधानी से</font></font></option>
		<option value="SANDILA_APMC#27.0701072#80.5198747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रविवार</font></font></option>
			<option value="SHAGANJ#26.04347#82.60407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शाहगंज</font></font></option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शाहाबादहरदोई</font></font></option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शाहजहांपुर</font></font></option>
			<option value="SHAMLI#29.450137#77.312206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शामली</font></font></option>
		<option value="SHIKOHABAD#27.0859419#78.5780237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिकोहाबाद</font></font></option>
			<option value="SIRSAGANJ#27.0736184#78.6528146"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिरसागंज</font></font></option>
			<option value="SITAPUR#27.5829004#80.6710501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सीतापुर</font></font></option>
			<option value="SULTANPUR#26.26577#82.0751"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुल्तानपुर</font></font></option>
			<option value="TIKUNIYA#28.381337#80.966576"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ठिकुन्या</font></font></option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तुलसीपुर</font></font></option>
			<option value="TUNDLA#27.1591066#78.3957514"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डिस्कनेक्ट किया गया</font></font></option>
			<option value="UJHANI#27.96991#78.9767"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उसानी</font></font></option>
			<option value="UNNAO_APMC#26.5475336#80.4882166"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उन्नाव</font></font></option>
			<option value="URAI#26.00165#79.49465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लिफ़ाफ़ा</font></font></option>
			<option value="VARANASI#25.3045#83.00395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वाराणसी</font></font></option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Wazirganj</font></font></option>
</select>


<!-- -------------------------------------------------------------------------------------------up_ml------------------------------------------------------------------- -->


<select class="ml" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>തിരഞ്ഞെടുക്കുക (Current Loc)</font></option>
<option value="ACHHALDA_APMC#26.802242#79.506317"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कूदते समय</font></font></option>
			<option value="ACHNERA#27.1367315#77.7852505"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अछनेरा</font></font></option>
			<option value="AGRA#27.1795368#78.021108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आगरा</font></font></option>
			<option value="AJUHA#25.701252#81.2463763"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">असवा</font></font></option>
			<option value="AKBARPUR#26.429907#82.53404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अकबरपुर</font></font></option>
			<option value="ALIGARH#27.893817#78.068131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अलीगढ</font></font></option>
			<option value="AMROHA_APMC#28.904436#78.467523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अमरोहा</font></font></option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आनंद नगर</font></font></option>
			<option value="ATARRA_APMC#25.285155#80.569807"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अदर्रा</font></font></option>
			<option value="AURAIYA#26.4693651#79.5169385"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">क्या आप?</font></font></option>
			<option value="AYODHYA#26.78555#82.20453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अयोध्या</font></font></option>
			<option value="AZAMGARH#26.0213748#83.1774796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आजमकर</font></font></option>
			<option value="BADAUN#28.0277182#79.1362377"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">परिवर्तन</font></font></option>
		<option value="BAHRAICH#27.581814#81.6077803"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहरीन ही</font></font></option>
			<option value="BALLIA#25.7750304#84.4151268"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलिया</font></font></option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलरामपुर</font></font></option>
			<option value="BANDA#25.483305#80.333295"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बाँदा</font></font></option>
			<option value="BANGARMAU#26.54806#80.484597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बांगरमऊ</font></font></option>
			<option value="BARABANKI#26.92718#81.191435"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पक्षपातपूर्ण</font></font></option>
			<option value="BAREILLY#28.3670485#79.4304251"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बरेली</font></font></option>
			<option value="BASTI#26.7800781#82.7641135"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बस्ती</font></font></option>
			<option value="BHARTHANA#26.7395449#79.2395049"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">भारतन</font></font></option>
			<option value="BHARUASUMERPUR#25.85314#80.11428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुमेरपुर</font></font></option>
			<option value="BILSI#28.132035#78.906977"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोलियाँ</font></font></option>
			<option value="BINDIKI#26.035672#80.572423"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पिंटागी</font></font></option>
			<option value="BISALPUR#28.2910216#79.8118195"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बीसलपुर</font></font></option>
		<option value="BULANDSHAHAR#28.411331#77.848434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बुलन्दशहर</font></font></option>
			<option value="CHANDAULI#25.521603#79.7091278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संदौली</font></font></option>
			<option value="CHANDAUSI#28.46672#78.81205"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">संदौसी</font></font></option>
			<option value="CHARRA#27.926672#78.398524"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोला</font></font></option>
			<option value="CHAUBEPUR#26.1572572#80.0772302"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चौबेपुर</font></font></option>
			<option value="CHIBRAMAU#27.149069#79.498006"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिबरामऊ</font></font></option>
			<option value="DADRI_UP#28.550266#77.5542629"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">दादरी</font></font></option>
			<option value="DEORIA#26.5139044#83.7982547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">दस्त</font></font></option>
			<option value="ETAH#27.5796784#78.6509796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आठ</font></font></option>
			<option value="ETAWAH#26.7660468#79.0468436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आठ</font></font></option>
			<option value="FARRUKHABAD#27.40473#79.51108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फारुखाबाद</font></font></option>
			<option value="FATEHPUR_APMC#25.925691#80.814415"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फ़तेहपुर</font></font></option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फ़तेहपुर सीकरी</font></font></option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फिरोजाबाद</font></font></option>
			<option value="GHAZIABAD#28.652934#77.428408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गाज़ियाबाद</font></font></option>
			<option value="GHIROR#27.24884#78.76036"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">किरोर</font></font></option>
		<option value="GOLAGOKARNATH#28.10115#80.45785"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोला गोकरनाथ</font></font></option>
			<option value="GONDA#27.16915#82.0027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोंडा</font></font></option>
			<option value="GORAKHPUR#26.7605635#83.3731585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गोरखपुर</font></font></option>
			<option value="HAPUR#28.8175401#77.7494573"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हापुड़</font></font></option>
			<option value="HARDOI#26.16499#81.21029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हरदोई</font></font></option>
			<option value="HASANPUR_APMC#28.17469#79.70675"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हसनपुर</font></font></option>
			<option value="HATHRAS#27.59295#78.029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hadhras</font></font></option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जहांगीराबाद</font></font></option>
			<option value="JAIS#26.26202#81.546553"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जयस</font></font></option>
			<option value="JALALABAD_APMC#29.57122#78.27642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जलालाबाद</font></font></option>
			<option value="JALAUN#26.1405657#79.324545"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जालान</font></font></option>
			<option value="JANGIPURA#25.72865#82.7243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जंगीपुरा</font></font></option>
			<option value="JAUNPUR_APMC#25.730007#82.679993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">जौनपुर</font></font></option>
			<option value="JHANSI#25.4526633#78.6080622"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">झांसी</font></font></option>
			<option value="KAIMGANJ#27.844#78.75705"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कायमगंज</font></font></option>
			<option value="KANNAUJ#27.09571#79.90982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कन्नौज</font></font></option>
			<option value="KANPUR#26.0493334#80.6598985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कानपुर</font></font></option>
			<option value="KARWI_APMC#25.4194#81.09424"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वक्र</font></font></option>
			<option value="KASGANJ#27.8272616#78.6496044"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कासगंज</font></font></option>
			<option value="KHAIR#27.941143#77.8397849"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बहुत अच्छा</font></font></option>
			<option value="KHALILABAD#26.77501#83.07359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खलीलाबाद</font></font></option>
			<option value="KHURJA#28.3247584#77.8367167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कुर्सी</font></font></option>
			<option value="KONCH#25.98365#79.133"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शंख</font></font></option>
			<option value="KOPAGANJ#26.0342#83.5511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोपागंज</font></font></option>
			<option value="KOSIKALAN#27.82713#77.40811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">कोझिकोड</font></font></option>
			<option value="LAKHIMPUR#27.92587#80.81672"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लखीमपुर</font></font></option>
			<option value="LALITPUR#25.9084#83.42075"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lalitpur</font></font></option>
			<option value="LUCKNOW#26.87675#80.92005"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लखनऊ</font></font></option>
			<option value="MADHOGANJ#27.3271041#80.4274309"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">माधोगंज</font></font></option>
			<option value="MAHMUDABAD#27.33221#81.21186"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">महमूदाबाद</font></font></option>
			<option value="MAHOBA#25.4920172#79.7903853"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">महोबा</font></font></option>
			<option value="MAINPURI#27.230008#79.019992"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुख्य बुरी</font></font></option>
			<option value="MATHURA#27.493375#77.6716801"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मथुरा</font></font></option>
			<option value="MAURANIPUR#25.237915#79.135153"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मऊरानीपुर</font></font></option>
			<option value="MEERUT#28.9844728#77.7064027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मेरठ</font></font></option>
			<option value="MILAK#28.6124635#79.1642839"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिलाग</font></font></option>
			<option value="MIRZAPUR#25.1337117#82.5644214"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मिर्जापुर</font></font></option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मोहम्मदाबाद</font></font></option>
			<option value="MORADABAD#28.8379255#78.7490039"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुरादाबाद</font></font></option>
			<option value="MUSKERA#25.666674#79.799993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुस्कान</font></font></option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">मुजफ्फरनगर</font></font></option>
			<option value="NAANPARA#27.8546659#81.5115957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नमस्ते</font></font></option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नजीबाबाद</font></font></option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नौगर</font></font></option>
			<option value="NAUTANWA_APMC#27.424646#83.420123"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नया</font></font></option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नवाबगंज</font></font></option>
			<option value="NOIDA_APMC#28.5355211#77.3910215"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">नोएडा</font></font></option>
			<option value="PALIA_KALAN#28.5328#80.57575"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बलिया कला</font></font></option>
		<option value="PARTAWAL#26.9682847#83.6015668"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">निकासी</font></font></option>
			<option value="PILIBHIT#28.5979445#79.8040465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फ़िलिपिथ</font></font></option>
			<option value="POWAYAN#27.99525#80.08025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">गवाहों</font></font></option>
			<option value="PRATAPGARH#25.9153562#81.9793796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">प्रतापकर</font></font></option>
			<option value="PRAYAGRAJ#25.473034#81.878357"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">प्रयागराज</font></font></option>
			<option value="PURANPUR#28.520457#80.1417034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पूरनपुर</font></font></option>
			<option value="RAE_BARELI#26.230299#81.240891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रायबरेली</font></font></option>
			<option value="RAMPUR#28.7735815#79.018902"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामपुर</font></font></option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रामपुर बिलासपुर</font></font></option>
			<option value="RASRA_APMC#25.8564239#83.8636319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रस</font></font></option>
			<option value="RATH#25.56546#79.60713"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रथ</font></font></option>
		<option value="ROBERTSGANJ#24.6827709#83.065602"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रोबेर्त्स्गंज</font></font></option>
			<option value="SADABAD_APMC#27.439864#78.034994"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सादाबाद</font></font></option>
			<option value="SAFDARGANJ#26.931618#81.20224"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सफदरगंज</font></font></option>
			<option value="SAHARANPUR#29.90313#77.52243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहारनपुर</font></font></option>
			<option value="Sahiyapur#27.3821#82.49045"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सहियापुर</font></font></option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आसानी से</font></font></option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सावधानी से</font></font></option>
		<option value="SANDILA_APMC#27.0701072#80.5198747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रविवार</font></font></option>
			<option value="SHAGANJ#26.04347#82.60407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शाहगंज</font></font></option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शाहाबादहरदोई</font></font></option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शाहजहांपुर</font></font></option>
			<option value="SHAMLI#29.450137#77.312206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शामली</font></font></option>
		<option value="SHIKOHABAD#27.0859419#78.5780237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">शिकोहाबाद</font></font></option>
			<option value="SIRSAGANJ#27.0736184#78.6528146"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सिरसागंज</font></font></option>
			<option value="SITAPUR#27.5829004#80.6710501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सीतापुर</font></font></option>
			<option value="SULTANPUR#26.26577#82.0751"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सुल्तानपुर</font></font></option>
			<option value="TIKUNIYA#28.381337#80.966576"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ठिकुन्या</font></font></option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">तुलसीपुर</font></font></option>
			<option value="TUNDLA#27.1591066#78.3957514"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">डिस्कनेक्ट किया गया</font></font></option>
			<option value="UJHANI#27.96991#78.9767"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उसानी</font></font></option>
			<option value="UNNAO_APMC#26.5475336#80.4882166"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">उन्नाव</font></font></option>
			<option value="URAI#26.00165#79.49465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लिफ़ाफ़ा</font></font></option>
			<option value="VARANASI#25.3045#83.00395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वाराणसी</font></font></option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Wazirganj</font></font></option>
</select>

<!-- ---------------------------------------------------------------------------------------------------up_te----------------------------------------------------------------- -->


<select class="te" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>ఎంచుకోండి (Current Loc)</font></option>
<option value="ACHHALDA_APMC#26.802242#79.506317"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దూకుతున్నప్పుడు</font></font></option>
			<option value="ACHNERA#27.1367315#77.7852505"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అచ్నేరా</font></font></option>
			<option value="AGRA#27.1795368#78.021108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆగ్రా</font></font></option>
			<option value="AJUHA#25.701252#81.2463763"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అశ్వ</font></font></option>
			<option value="AKBARPUR#26.429907#82.53404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అక్బర్&zwnj;పూర్</font></font></option>
			<option value="ALIGARH#27.893817#78.068131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అలీఘర్</font></font></option>
			<option value="AMROHA_APMC#28.904436#78.467523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అమ్రోహా</font></font></option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆనంద్ నగర్</font></font></option>
			<option value="ATARRA_APMC#25.285155#80.569807"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అదర్రా</font></font></option>
			<option value="AURAIYA#26.4693651#79.5169385"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మీరు?</font></font></option>
			<option value="AYODHYA#26.78555#82.20453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అయోధ్య</font></font></option>
			<option value="AZAMGARH#26.0213748#83.1774796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆజంకర్</font></font></option>
			<option value="BADAUN#28.0277182#79.1362377"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మార్చండి</font></font></option>
		<option value="BAHRAICH#27.581814#81.6077803"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">స్వయంగా బహ్రెయిన్</font></font></option>
			<option value="BALLIA#25.7750304#84.4151268"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బల్లియా</font></font></option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బలరాంపూర్</font></font></option>
			<option value="BANDA#25.483305#80.333295"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బండ</font></font></option>
			<option value="BANGARMAU#26.54806#80.484597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బంగార్మౌ</font></font></option>
			<option value="BARABANKI#26.92718#81.191435"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పక్షపాతం</font></font></option>
			<option value="BAREILLY#28.3670485#79.4304251"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బరేలీ</font></font></option>
			<option value="BASTI#26.7800781#82.7641135"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బస్తీ</font></font></option>
			<option value="BHARTHANA#26.7395449#79.2395049"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">భరతన్</font></font></option>
			<option value="BHARUASUMERPUR#25.85314#80.11428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సుమేర్పూర్</font></font></option>
			<option value="BILSI#28.132035#78.906977"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మాత్రలు</font></font></option>
			<option value="BINDIKI#26.035672#80.572423"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పింటగి</font></font></option>
			<option value="BISALPUR#28.2910216#79.8118195"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బిసల్పూర్</font></font></option>
		<option value="BULANDSHAHAR#28.411331#77.848434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బులంద్&zwnj;షహర్</font></font></option>
			<option value="CHANDAULI#25.521603#79.7091278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సందౌలీ</font></font></option>
			<option value="CHANDAUSI#28.46672#78.81205"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సందౌసి</font></font></option>
			<option value="CHARRA#27.926672#78.398524"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గోళము</font></font></option>
			<option value="CHAUBEPUR#26.1572572#80.0772302"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చౌబేపూర్</font></font></option>
			<option value="CHIBRAMAU#27.149069#79.498006"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సిబ్రామౌ</font></font></option>
			<option value="DADRI_UP#28.550266#77.5542629"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">దాద్రీ</font></font></option>
			<option value="DEORIA#26.5139044#83.7982547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">అతిసారం</font></font></option>
			<option value="ETAH#27.5796784#78.6509796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఎనిమిది</font></font></option>
			<option value="ETAWAH#26.7660468#79.0468436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఎనిమిది</font></font></option>
			<option value="FARRUKHABAD#27.40473#79.51108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఫరూకాబాద్</font></font></option>
			<option value="FATEHPUR_APMC#25.925691#80.814415"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఫతేపూర్</font></font></option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఫతేపూర్ సిక్రి</font></font></option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఫిరోజాబాద్</font></font></option>
			<option value="GHAZIABAD#28.652934#77.428408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఘజియాబాద్</font></font></option>
			<option value="GHIROR#27.24884#78.76036"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కిరోర్</font></font></option>
		<option value="GOLAGOKARNATH#28.10115#80.45785"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గోల గోకర నాథ్</font></font></option>
			<option value="GONDA#27.16915#82.0027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కొండా</font></font></option>
			<option value="GORAKHPUR#26.7605635#83.3731585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">గోరఖ్&zwnj;పూర్</font></font></option>
			<option value="HAPUR#28.8175401#77.7494573"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హాపూర్</font></font></option>
			<option value="HARDOI#26.16499#81.21029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హర్డోయ్</font></font></option>
			<option value="HASANPUR_APMC#28.17469#79.70675"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హసన్పూర్</font></font></option>
			<option value="HATHRAS#27.59295#78.029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హధ్రాస్</font></font></option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జహంగీరాబాద్</font></font></option>
			<option value="JAIS#26.26202#81.546553"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జైస్</font></font></option>
			<option value="JALALABAD_APMC#29.57122#78.27642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జలాలాబాద్</font></font></option>
			<option value="JALAUN#26.1405657#79.324545"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జలాన్</font></font></option>
			<option value="JANGIPURA#25.72865#82.7243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జాంగిపురా</font></font></option>
			<option value="JAUNPUR_APMC#25.730007#82.679993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జౌన్&zwnj;పూర్</font></font></option>
			<option value="JHANSI#25.4526633#78.6080622"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఝాన్సీ</font></font></option>
			<option value="KAIMGANJ#27.844#78.75705"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కాయంగంజ్</font></font></option>
			<option value="KANNAUJ#27.09571#79.90982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కన్నౌజ్</font></font></option>
			<option value="KANPUR#26.0493334#80.6598985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కాన్పూర్</font></font></option>
			<option value="KARWI_APMC#25.4194#81.09424"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వంపు</font></font></option>
			<option value="KASGANJ#27.8272616#78.6496044"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కస్గంజ్</font></font></option>
			<option value="KHAIR#27.941143#77.8397849"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బాగా చేసారు</font></font></option>
			<option value="KHALILABAD#26.77501#83.07359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఖలీలాబాద్</font></font></option>
			<option value="KHURJA#28.3247584#77.8367167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కుర్చీ</font></font></option>
			<option value="KONCH#25.98365#79.133"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">శంఖం</font></font></option>
			<option value="KOPAGANJ#26.0342#83.5511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కోపగంజ్</font></font></option>
			<option value="KOSIKALAN#27.82713#77.40811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కోజికోడ్</font></font></option>
			<option value="LAKHIMPUR#27.92587#80.81672"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">లఖింపూర్</font></font></option>
			<option value="LALITPUR#25.9084#83.42075"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">లలిత్పూర్</font></font></option>
			<option value="LUCKNOW#26.87675#80.92005"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">లక్నో</font></font></option>
			<option value="MADHOGANJ#27.3271041#80.4274309"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మధోగంజ్</font></font></option>
			<option value="MAHMUDABAD#27.33221#81.21186"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మహమూదాబాద్</font></font></option>
			<option value="MAHOBA#25.4920172#79.7903853"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మహోబా</font></font></option>
			<option value="MAINPURI#27.230008#79.019992"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ప్రధాన బురి</font></font></option>
			<option value="MATHURA#27.493375#77.6716801"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మధుర</font></font></option>
			<option value="MAURANIPUR#25.237915#79.135153"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మౌరానీపూర్</font></font></option>
			<option value="MEERUT#28.9844728#77.7064027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మీరట్</font></font></option>
			<option value="MILAK#28.6124635#79.1642839"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మిలాగ్</font></font></option>
			<option value="MIRZAPUR#25.1337117#82.5644214"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మీర్జాపూర్</font></font></option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మహమ్మదాబాద్</font></font></option>
			<option value="MORADABAD#28.8379255#78.7490039"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">మొరాదాబాద్</font></font></option>
			<option value="MUSKERA#25.666674#79.799993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">చిరునవ్వు</font></font></option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ముజఫర్&zwnj;నగర్</font></font></option>
			<option value="NAANPARA#27.8546659#81.5115957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">హలో</font></font></option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నజీబాబాద్</font></font></option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నౌగర్</font></font></option>
			<option value="NAUTANWA_APMC#27.424646#83.420123"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కొత్తది</font></font></option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నవాబ్&zwnj;గంజ్</font></font></option>
			<option value="NOIDA_APMC#28.5355211#77.3910215"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">నోయిడా</font></font></option>
			<option value="PALIA_KALAN#28.5328#80.57575"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">బలియా కాలా</font></font></option>
		<option value="PARTAWAL#26.9682847#83.6015668"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఉపసంహరణ</font></font></option>
			<option value="PILIBHIT#28.5979445#79.8040465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఫిలిప్పిత్</font></font></option>
			<option value="POWAYAN#27.99525#80.08025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సాక్షులు</font></font></option>
			<option value="PRATAPGARH#25.9153562#81.9793796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ప్రతాప్కర్</font></font></option>
			<option value="PRAYAGRAJ#25.473034#81.878357"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ప్రయాగ్రాజ్</font></font></option>
			<option value="PURANPUR#28.520457#80.1417034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">పూరన్పూర్</font></font></option>
			<option value="RAE_BARELI#26.230299#81.240891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాయబరేలి</font></font></option>
			<option value="RAMPUR#28.7735815#79.018902"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాంపూర్</font></font></option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాంపూర్ బిలాస్పూర్</font></font></option>
			<option value="RASRA_APMC#25.8564239#83.8636319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రసం</font></font></option>
			<option value="RATH#25.56546#79.60713"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రథము</font></font></option>
		<option value="ROBERTSGANJ#24.6827709#83.065602"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">రాబర్ట్స్&zwnj;గంజ్</font></font></option>
			<option value="SADABAD_APMC#27.439864#78.034994"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సదాబాద్</font></font></option>
			<option value="SAFDARGANJ#26.931618#81.20224"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సఫ్దర్&zwnj;గంజ్</font></font></option>
			<option value="SAHARANPUR#29.90313#77.52243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సహరాన్&zwnj;పూర్</font></font></option>
			<option value="Sahiyapur#27.3821#82.49045"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సహియాపూర్</font></font></option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సులభంగా</font></font></option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">జాగ్రత్తగా</font></font></option>
		<option value="SANDILA_APMC#27.0701072#80.5198747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఆదివారం</font></font></option>
			<option value="SHAGANJ#26.04347#82.60407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">షాగంజ్</font></font></option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">షహాబాద్ హర్దోయ్</font></font></option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">షాజహాన్&zwnj;పూర్</font></font></option>
			<option value="SHAMLI#29.450137#77.312206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">షామ్లీ</font></font></option>
		<option value="SHIKOHABAD#27.0859419#78.5780237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">షికోహాబాద్</font></font></option>
			<option value="SIRSAGANJ#27.0736184#78.6528146"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సిర్సాగంజ్</font></font></option>
			<option value="SITAPUR#27.5829004#80.6710501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సీతాపూర్</font></font></option>
			<option value="SULTANPUR#26.26577#82.0751"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">సుల్తాన్&zwnj;పూర్</font></font></option>
			<option value="TIKUNIYA#28.381337#80.966576"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తికున్యా</font></font></option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">తులసిపూర్</font></font></option>
			<option value="TUNDLA#27.1591066#78.3957514"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">డిస్&zwnj;కనెక్ట్ చేయబడింది</font></font></option>
			<option value="UJHANI#27.96991#78.9767"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఉసాని</font></font></option>
			<option value="UNNAO_APMC#26.5475336#80.4882166"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ఉన్నావ్</font></font></option>
			<option value="URAI#26.00165#79.49465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">కవచ</font></font></option>
			<option value="VARANASI#25.3045#83.00395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వారణాసి</font></font></option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">వజీర్&zwnj;గంజ్</font></font></option>

</select>

<!-- ----------------------------------------------------------------------------------------------up_ta-------------------------------------------------------------------- -->


<select class="ta" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>தேர்ந்தெடுக்கவும் (Current Loc)</font></option>
<option value="ACHHALDA_APMC#26.802242#79.506317">குதிக்கும் போது</option>
			<option value="ACHNERA#27.1367315#77.7852505">அச்னேரா</option>
			<option value="AGRA#27.1795368#78.021108">ஆக்ரா</option>
			<option value="AJUHA#25.701252#81.2463763">அசுவா</option>
			<option value="AKBARPUR#26.429907#82.53404">அக்பர்பூர்</option>
			<option value="ALIGARH#27.893817#78.068131">அலிகார்</option>
			<option value="AMROHA_APMC#28.904436#78.467523">அம்ரோஹா</option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187">ஆனந்த் நகர்</option>
			<option value="ATARRA_APMC#25.285155#80.569807">அடார்ரா</option>
			<option value="AURAIYA#26.4693651#79.5169385">அவுரையா</option>
			<option value="AYODHYA#26.78555#82.20453">அயோத்தி</option>
			<option value="AZAMGARH#26.0213748#83.1774796">அசம்கர்</option>
			<option value="BADAUN#28.0277182#79.1362377">மாற்றம்</option>
		<option value="BAHRAICH#27.581814#81.6077803">பஹ்ரைன் தானே</option>
			<option value="BALLIA#25.7750304#84.4151268">பல்லியா</option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129">பல்ராம்பூர்</option>
			<option value="BANDA#25.483305#80.333295">பண்டா</option>
			<option value="BANGARMAU#26.54806#80.484597">பங்கர்மாவ்</option>
			<option value="BARABANKI#26.92718#81.191435">பாரபங்கி</option>
			<option value="BAREILLY#28.3670485#79.4304251">பரேலி</option>
			<option value="BASTI#26.7800781#82.7641135">பஸ்தி</option>
			<option value="BHARTHANA#26.7395449#79.2395049">பரதன்</option>
			<option value="BHARUASUMERPUR#25.85314#80.11428">சுமர்பூர்</option>
			<option value="BILSI#28.132035#78.906977">பில்சி</option>
			<option value="BINDIKI#26.035672#80.572423">பிந்தகி</option>
			<option value="BISALPUR#28.2910216#79.8118195">பிசல்பூர்</option>
		<option value="BULANDSHAHAR#28.411331#77.848434">புலந்த்ஷாஹர்</option>
			<option value="CHANDAULI#25.521603#79.7091278">சண்டௌலி</option>
			<option value="CHANDAUSI#28.46672#78.81205">சண்டௌசி</option>
			<option value="CHARRA#27.926672#78.398524">உருண்டை</option>
			<option value="CHAUBEPUR#26.1572572#80.0772302">சௌபேபூர்</option>
			<option value="CHIBRAMAU#27.149069#79.498006">சிப்ரமாவ்</option>
			<option value="DADRI_UP#28.550266#77.5542629">தாத்ரி</option>
			<option value="DEORIA#26.5139044#83.7982547">டியோரியா</option>
			<option value="ETAH#27.5796784#78.6509796">எட்டா</option>
			<option value="ETAWAH#26.7660468#79.0468436">எட்டாவா</option>
			<option value="FARRUKHABAD#27.40473#79.51108">ஃபரூக்காபாத்</option>
			<option value="FATEHPUR_APMC#25.925691#80.814415">ஃபதேபூர்</option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393">ஃபதேபூர் சிக்ரி</option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433">ஃபிரோசாபாத்</option>
			<option value="GHAZIABAD#28.652934#77.428408">காசியாபாத்</option>
			<option value="GHIROR#27.24884#78.76036">கிரோர்</option>
		<option value="GOLAGOKARNATH#28.10115#80.45785">கோல கோகர நாத்</option>
			<option value="GONDA#27.16915#82.0027">கோண்டா</option>
			<option value="GORAKHPUR#26.7605635#83.3731585">கோரக்பூர்</option>
			<option value="HAPUR#28.8175401#77.7494573">ஹாபூர்</option>
			<option value="HARDOI#26.16499#81.21029">ஹர்டோய்</option>
			<option value="HASANPUR_APMC#28.17469#79.70675">ஹசன்பூர்</option>
			<option value="HATHRAS#27.59295#78.029">ஹத்ராஸ்</option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452">ஜஹாங்கிராபாத்</option>
			<option value="JAIS#26.26202#81.546553">ஜெய்ஸ்</option>
			<option value="JALALABAD_APMC#29.57122#78.27642">ஜலாலாபாத்</option>
			<option value="JALAUN#26.1405657#79.324545">ஜலான்</option>
			<option value="JANGIPURA#25.72865#82.7243">ஜாங்கிபுரா</option>
			<option value="JAUNPUR_APMC#25.730007#82.679993">ஜான்பூர்</option>
			<option value="JHANSI#25.4526633#78.6080622">ஜான்சி</option>
			<option value="KAIMGANJ#27.844#78.75705">காயம்கஞ்ச்</option>
			<option value="KANNAUJ#27.09571#79.90982">கன்னௌஜ்</option>
			<option value="KANPUR#26.0493334#80.6598985">கான்பூர்</option>
			<option value="KARWI_APMC#25.4194#81.09424">வளைவு</option>
			<option value="KASGANJ#27.8272616#78.6496044">காஸ்கஞ்ச்</option>
			<option value="KHAIR#27.941143#77.8397849">நன்றாக</option>
			<option value="KHALILABAD#26.77501#83.07359">கலிலாபாத்</option>
			<option value="KHURJA#28.3247584#77.8367167">நாற்காலி</option>
			<option value="KONCH#25.98365#79.133">சங்கு</option>
			<option value="KOPAGANJ#26.0342#83.5511">கோபகஞ்ச்</option>
			<option value="KOSIKALAN#27.82713#77.40811">கோசிகாலன்</option>
			<option value="LAKHIMPUR#27.92587#80.81672">லக்கிம்பூர்</option>
			<option value="LALITPUR#25.9084#83.42075">லலித்பூர்</option>
			<option value="LUCKNOW#26.87675#80.92005">லக்னோ</option>
			<option value="MADHOGANJ#27.3271041#80.4274309">மதோகஞ்ச்</option>
			<option value="MAHMUDABAD#27.33221#81.21186">மஹ்முதாபாத்</option>
			<option value="MAHOBA#25.4920172#79.7903853">மஹோபா</option>
			<option value="MAINPURI#27.230008#79.019992">மெயின்புரி</option>
			<option value="MATHURA#27.493375#77.6716801">மதுரா</option>
			<option value="MAURANIPUR#25.237915#79.135153">மௌரானிபூர்</option>
			<option value="MEERUT#28.9844728#77.7064027">மீரட்</option>
			<option value="MILAK#28.6124635#79.1642839">மிலாக்</option>
			<option value="MIRZAPUR#25.1337117#82.5644214">மிர்சாபூர்</option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917">முகமதாபாத்</option>
			<option value="MORADABAD#28.8379255#78.7490039">மொராதாபாத்</option>
			<option value="MUSKERA#25.666674#79.799993">புன்னகை</option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651">முசாபர்நகர்</option>
			<option value="NAANPARA#27.8546659#81.5115957">நன்பரா</option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402">நஜிபாபாத்</option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613">நௌகர்</option>
			<option value="NAUTANWA_APMC#27.424646#83.420123">புதிய</option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315">நவாப்கஞ்ச்</option>
			<option value="NOIDA_APMC#28.5355211#77.3910215">நொய்டா</option>
			<option value="PALIA_KALAN#28.5328#80.57575">பாலியா கலா</option>
		<option value="PARTAWAL#26.9682847#83.6015668">திரும்பப் பெறுதல்</option>
			<option value="PILIBHIT#28.5979445#79.8040465">பிலிபித்</option>
			<option value="POWAYAN#27.99525#80.08025">சாட்சிகள்</option>
			<option value="PRATAPGARH#25.9153562#81.9793796">பிரதாப்கர்</option>
			<option value="PRAYAGRAJ#25.473034#81.878357">பிரயாக்ராஜ்</option>
			<option value="PURANPUR#28.520457#80.1417034">பூரன்பூர்</option>
			<option value="RAE_BARELI#26.230299#81.240891">ரேபரேலி</option>
			<option value="RAMPUR#28.7735815#79.018902">ராம்பூர்</option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568">ராம்பூர் பிலாஸ்பூர்</option>
			<option value="RASRA_APMC#25.8564239#83.8636319">சாறு</option>
			<option value="RATH#25.56546#79.60713">தேர்</option>
		<option value="ROBERTSGANJ#24.6827709#83.065602">ராபர்ட்ஸ்கஞ்ச்</option>
			<option value="SADABAD_APMC#27.439864#78.034994">சதாபாத்</option>
			<option value="SAFDARGANJ#26.931618#81.20224">சஃப்தர்கஞ்ச்</option>
			<option value="SAHARANPUR#29.90313#77.52243">சஹாரன்பூர்</option>
			<option value="Sahiyapur#27.3821#82.49045">சாஹியபூர்</option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888">எளிதாக</option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597">கவனமாக</option>
		<option value="SANDILA_APMC#27.0701072#80.5198747">ஞாயிற்றுக்கிழமை</option>
			<option value="SHAGANJ#26.04347#82.60407">ஷாகஞ்ச்</option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771">ஷஹபாத் ஹர்தோய்</option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019">ஷாஜஹான்பூர்</option>
			<option value="SHAMLI#29.450137#77.312206">ஷாம்லி</option>
		<option value="SHIKOHABAD#27.0859419#78.5780237">ஷிகோஹாபாத்</option>
			<option value="SIRSAGANJ#27.0736184#78.6528146">சிர்சாகஞ்ச்</option>
			<option value="SITAPUR#27.5829004#80.6710501">சீதாபூர்</option>
			<option value="SULTANPUR#26.26577#82.0751">சுல்தான்பூர்</option>
			<option value="TIKUNIYA#28.381337#80.966576">திக்குனியா</option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776">துளசிபூர்</option>
			<option value="TUNDLA#27.1591066#78.3957514">துண்டிக்கப்பட்டது</option>
			<option value="UJHANI#27.96991#78.9767">உசானி</option>
			<option value="UNNAO_APMC#26.5475336#80.4882166">உன்னாவ்</option>
			<option value="URAI#26.00165#79.49465">உறை</option>
			<option value="VARANASI#25.3045#83.00395">வாரணாசி</option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165">வசீர்கஞ்ச்</option>
</select>


<!-- -------------------------------------------------------------------------------------up_en--------------------------------------------------------------------------- -->


<select class="en" style="display:none" name="apmcplace" id="" onchange="getComboA(this)">
<option value="currentGPS"><font>Select (Current Loc)</font></option>
<option value="ACHHALDA_APMC#26.802242#79.506317"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">while jumping</font></font></option>
			<option value="ACHNERA#27.1367315#77.7852505"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Achnera</font></font></option>
			<option value="AGRA#27.1795368#78.021108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agra</font></font></option>
			<option value="AJUHA#25.701252#81.2463763"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Aswa</font></font></option>
			<option value="AKBARPUR#26.429907#82.53404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Akbarpur</font></font></option>
			<option value="ALIGARH#27.893817#78.068131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Aligarh</font></font></option>
			<option value="AMROHA_APMC#28.904436#78.467523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Amroha</font></font></option>
		<option value="ANAND_NAGAR_APMC#26.43757#80.34187"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anand Nagar</font></font></option>
			<option value="ATARRA_APMC#25.285155#80.569807"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Adarra</font></font></option>
			<option value="AURAIYA#26.4693651#79.5169385"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Are you?</font></font></option>
			<option value="AYODHYA#26.78555#82.20453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ayodhya</font></font></option>
			<option value="AZAMGARH#26.0213748#83.1774796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Azamkar</font></font></option>
			<option value="BADAUN#28.0277182#79.1362377"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Change</font></font></option>
		<option value="BAHRAICH#27.581814#81.6077803"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bahrain itself</font></font></option>
			<option value="BALLIA#25.7750304#84.4151268"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ballia</font></font></option>
			<option value="BALRAMPUR_APMC#27.42843#82.183129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Balrampur</font></font></option>
			<option value="BANDA#25.483305#80.333295"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Banda</font></font></option>
			<option value="BANGARMAU#26.54806#80.484597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bangarmau</font></font></option>
			<option value="BARABANKI#26.92718#81.191435"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Partisan</font></font></option>
			<option value="BAREILLY#28.3670485#79.4304251"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bareilly</font></font></option>
			<option value="BASTI#26.7800781#82.7641135"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Basti</font></font></option>
			<option value="BHARTHANA#26.7395449#79.2395049"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bharathan</font></font></option>
			<option value="BHARUASUMERPUR#25.85314#80.11428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sumerpur</font></font></option>
			<option value="BILSI#28.132035#78.906977"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pills</font></font></option>
			<option value="BINDIKI#26.035672#80.572423"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pintagi</font></font></option>
			<option value="BISALPUR#28.2910216#79.8118195"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bisalpur</font></font></option>
		<option value="BULANDSHAHAR#28.411331#77.848434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bulandshahr</font></font></option>
			<option value="CHANDAULI#25.521603#79.7091278"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sandauli</font></font></option>
			<option value="CHANDAUSI#28.46672#78.81205"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sandausi</font></font></option>
			<option value="CHARRA#27.926672#78.398524"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Orb</font></font></option>
			<option value="CHAUBEPUR#26.1572572#80.0772302"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chaubeypur</font></font></option>
			<option value="CHIBRAMAU#27.149069#79.498006"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sibramau</font></font></option>
			<option value="DADRI_UP#28.550266#77.5542629"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dadri</font></font></option>
			<option value="DEORIA#26.5139044#83.7982547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Diarrhea</font></font></option>
			<option value="ETAH#27.5796784#78.6509796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Eight</font></font></option>
			<option value="ETAWAH#26.7660468#79.0468436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Eight</font></font></option>
			<option value="FARRUKHABAD#27.40473#79.51108"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Farooqabad</font></font></option>
			<option value="FATEHPUR_APMC#25.925691#80.814415"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fatehpur</font></font></option>
		<option value="FATEHPUR_SIKRI#27.09165#77.62393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fatehpur Sikri</font></font></option>
		<option value="FIROZABAD_APMC#27.1506737#78.3889433"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firozabad</font></font></option>
			<option value="GHAZIABAD#28.652934#77.428408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ghaziabad</font></font></option>
			<option value="GHIROR#27.24884#78.76036"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kiror</font></font></option>
		<option value="GOLAGOKARNATH#28.10115#80.45785"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gola Gokara Nath</font></font></option>
			<option value="GONDA#27.16915#82.0027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Konda</font></font></option>
			<option value="GORAKHPUR#26.7605635#83.3731585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gorakhpur</font></font></option>
			<option value="HAPUR#28.8175401#77.7494573"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hapur</font></font></option>
			<option value="HARDOI#26.16499#81.21029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hardoi</font></font></option>
			<option value="HASANPUR_APMC#28.17469#79.70675"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hasanpur</font></font></option>
			<option value="HATHRAS#27.59295#78.029"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hadhras</font></font></option>
		<option value="JAHANGIRABAD#27.7683576#80.7343452"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jahangirabad</font></font></option>
			<option value="JAIS#26.26202#81.546553"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jayce</font></font></option>
			<option value="JALALABAD_APMC#29.57122#78.27642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jalalabad</font></font></option>
			<option value="JALAUN#26.1405657#79.324545"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jalan</font></font></option>
			<option value="JANGIPURA#25.72865#82.7243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Zangipura</font></font></option>
			<option value="JAUNPUR_APMC#25.730007#82.679993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jaunpur</font></font></option>
			<option value="JHANSI#25.4526633#78.6080622"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jhansi</font></font></option>
			<option value="KAIMGANJ#27.844#78.75705"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kayamganj</font></font></option>
			<option value="KANNAUJ#27.09571#79.90982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kannauj</font></font></option>
			<option value="KANPUR#26.0493334#80.6598985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kanpur</font></font></option>
			<option value="KARWI_APMC#25.4194#81.09424"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">curve</font></font></option>
			<option value="KASGANJ#27.8272616#78.6496044"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kasganj</font></font></option>
			<option value="KHAIR#27.941143#77.8397849"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Well done</font></font></option>
			<option value="KHALILABAD#26.77501#83.07359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Khalilabad</font></font></option>
			<option value="KHURJA#28.3247584#77.8367167"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chair</font></font></option>
			<option value="KONCH#25.98365#79.133"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Conch</font></font></option>
			<option value="KOPAGANJ#26.0342#83.5511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kopaganj</font></font></option>
			<option value="KOSIKALAN#27.82713#77.40811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kozhikode</font></font></option>
			<option value="LAKHIMPUR#27.92587#80.81672"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lakhimpur</font></font></option>
			<option value="LALITPUR#25.9084#83.42075"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lalitpur</font></font></option>
			<option value="LUCKNOW#26.87675#80.92005"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lucknow</font></font></option>
			<option value="MADHOGANJ#27.3271041#80.4274309"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Madhoganj</font></font></option>
			<option value="MAHMUDABAD#27.33221#81.21186"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mahmudabad</font></font></option>
			<option value="MAHOBA#25.4920172#79.7903853"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mahoba</font></font></option>
			<option value="MAINPURI#27.230008#79.019992"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Main Buri</font></font></option>
			<option value="MATHURA#27.493375#77.6716801"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mathura</font></font></option>
			<option value="MAURANIPUR#25.237915#79.135153"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mouranipur</font></font></option>
			<option value="MEERUT#28.9844728#77.7064027"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Meerut</font></font></option>
			<option value="MILAK#28.6124635#79.1642839"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Milag</font></font></option>
			<option value="MIRZAPUR#25.1337117#82.5644214"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mirzapur</font></font></option>
		<option value="MOHAMADABAD_APMC#25.6168698#83.7530917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mohammedabad</font></font></option>
			<option value="MORADABAD#28.8379255#78.7490039"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Moradabad</font></font></option>
			<option value="MUSKERA#25.666674#79.799993"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">smile</font></font></option>
			<option value="MUZZAFFARNAGAR#29.433345#77.666651"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Muzaffarnagar</font></font></option>
			<option value="NAANPARA#27.8546659#81.5115957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hello</font></font></option>
			<option value="NAJIBABAD_APMC#29.5025518#78.212402"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Najibabad</font></font></option>
			<option value="NAUGARH_APMC#27.2751118#83.0882613"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Naugar</font></font></option>
			<option value="NAUTANWA_APMC#27.424646#83.420123"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">New</font></font></option>
			<option value="NAWABGANJ_APMC#28.5276#79.62315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nawabganj</font></font></option>
			<option value="NOIDA_APMC#28.5355211#77.3910215"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Noida</font></font></option>
			<option value="PALIA_KALAN#28.5328#80.57575"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Balia Kala</font></font></option>
		<option value="PARTAWAL#26.9682847#83.6015668"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Withdrawal</font></font></option>
			<option value="PILIBHIT#28.5979445#79.8040465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Philippith</font></font></option>
			<option value="POWAYAN#27.99525#80.08025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Witnesses</font></font></option>
			<option value="PRATAPGARH#25.9153562#81.9793796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pratapkar</font></font></option>
			<option value="PRAYAGRAJ#25.473034#81.878357"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prayagraj</font></font></option>
			<option value="PURANPUR#28.520457#80.1417034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pooranpur</font></font></option>
			<option value="RAE_BARELI#26.230299#81.240891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Raebareli</font></font></option>
			<option value="RAMPUR#28.7735815#79.018902"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rampur</font></font></option>
		<option value="RAMPUR_BILASPUR#28.75388#79.32568"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rampur Bilaspur</font></font></option>
			<option value="RASRA_APMC#25.8564239#83.8636319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Juice</font></font></option>
			<option value="RATH#25.56546#79.60713"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chariot</font></font></option>
		<option value="ROBERTSGANJ#24.6827709#83.065602"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Robertsganj</font></font></option>
			<option value="SADABAD_APMC#27.439864#78.034994"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sadabad</font></font></option>
			<option value="SAFDARGANJ#26.931618#81.20224"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safdarganj</font></font></option>
			<option value="SAHARANPUR#29.90313#77.52243"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Saharanpur</font></font></option>
			<option value="Sahiyapur#27.3821#82.49045"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sahiyapur</font></font></option>
			<option value="SAHJANWA_APMC#27.1339993#81.9618888"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Easily</font></font></option>
			<option value="SAMBHAL_APMC#28.5833403#78.5666597"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Carefully</font></font></option>
		<option value="SANDILA_APMC#27.0701072#80.5198747"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sunday</font></font></option>
			<option value="SHAGANJ#26.04347#82.60407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shahganj</font></font></option>
	<option value="SHAHBAD_HARDOI#27.6446633#79.9740771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shahabad Hardoi</font></font></option>
		<option value="SHAHJAHANPUR#29.6805449#77.6817019"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shahjahanpur</font></font></option>
			<option value="SHAMLI#29.450137#77.312206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shamli</font></font></option>
		<option value="SHIKOHABAD#27.0859419#78.5780237"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shikohabad</font></font></option>
			<option value="SIRSAGANJ#27.0736184#78.6528146"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sirsaganj</font></font></option>
			<option value="SITAPUR#27.5829004#80.6710501"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sitapur</font></font></option>
			<option value="SULTANPUR#26.26577#82.0751"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sultanpur</font></font></option>
			<option value="TIKUNIYA#28.381337#80.966576"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thikunya</font></font></option>
			<option value="TULSIPUR_APMC#27.5786526#82.4505776"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tulsipur</font></font></option>
			<option value="TUNDLA#27.1591066#78.3957514"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">disconnected</font></font></option>
			<option value="UJHANI#27.96991#78.9767"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Usani</font></font></option>
			<option value="UNNAO_APMC#26.5475336#80.4882166"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Unnao</font></font></option>
			<option value="URAI#26.00165#79.49465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envelope</font></font></option>
			<option value="VARANASI#25.3045#83.00395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Varanasi</font></font></option>
			<option value="WAZIRGANJ_APMC#28.16275#79.05165"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Wazirganj</font></font></option>
</select>`;
       
var place=document.querySelector(".place");
console.log(selectedValue);
if(selectedValue==="ta"){
	place.innerHTML=tamil_nadu;
	checkTextConversion();
}else if(selectedValue==="od"){
	place.innerHTML=odisha;
	checkTextConversion();
}
else if(selectedValue==="wb"){
	place.innerHTML=west_bengal;
	checkTextConversion();
}else if(selectedValue==="kl"){
	place.innerHTML=kerala;
	checkTextConversion();
}else if(selectedValue==="ap"){
	place.innerHTML=andra;
	checkTextConversion();
}else if(selectedValue==="up"){
	place.innerHTML=uttar;
	checkTextConversion();
}




  }