const OFFICIAL='https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx';
const sourcePages={
  '113': 'https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113190&y=2024',
  '97': 'https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=97250&y=2008'
};
const subjects=['營建法規與實務','建築結構','建築構造與施工','建築環境控制'];
const questions=[
 {id:'113-1801-01',year:'113',subject:'營建法規與實務',text:'依建築法規定，申請建造執照之建築物平面、立面、剖面圖，其比例尺最小不得小於多少？',options:['1/30','1/50','1/100','1/200'],answer:3,source:'https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=113190&q=1&s=0101&t=Q',note:'113 年營建法規與實務第 1 題；官方標準答案為 D。'},
 {id:'113-1801-02',year:'113',subject:'營建法規與實務',text:'依建築法規定，直轄市、縣（市）（局）主管建築機關收到起造人申請建造執照書件之日起，至多應於幾日內審查完竣，合格者即發給執照？',options:['5','10','15','30'],answer:1,source:'https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=113190&q=1&s=0101&t=Q',note:'113 年營建法規與實務第 2 題；官方標準答案為 B。'},
 {id:'113-1801-03',year:'113',subject:'營建法規與實務',text:'依建築法規定，下列敘述何者正確？',options:['建築基地與建築線應相連接，其接連部分最小寬度由中央主管建築機關統一規定','建築物基地地面不得高出所臨接道路邊界處之路面','建築基地最小面積之寬度及深度由中央主管建築機關統一規定','建築基地面積畸零狹小不合規定者，非與鄰接土地協議調整地形或合併使用，達到規定最小面積之寬度及深度，不得建築'],answer:3,source:'https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=113190&q=1&s=0101&t=Q',note:'113 年營建法規與實務第 3 題；官方標準答案為 D。'},
 {id:'113-1801-04',year:'113',subject:'營建法規與實務',text:'依建築法規定，起造人領得建造執照後，應即申報該管主管建築機關備案之情事，不包含下列何者？',options:['變更起造人','變更承造人','變更設計人','變更監造人'],answer:2,source:'https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=113190&q=1&s=0101&t=Q',note:'113 年營建法規與實務第 4 題；官方標準答案為 C。'},
 {id:'113-1801-05',year:'113',subject:'營建法規與實務',text:'依建築法規定，建築工程中必須勘驗部分，應由主管建築機關指定由承造人會同下列何者按時申報後，方得繼續施工？',options:['設計人','監造人','起造人','工地主任'],answer:1,source:'https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=113190&q=1&s=0101&t=Q',note:'113 年營建法規與實務第 5 題；官方標準答案為 B。'},
 {id:'113-2801-01',year:'113',subject:'建築結構',text:'建築結構科目 113 年第 1 題：請開啟官方試題 PDF 作答，再回到本頁使用「官方題庫」核對完整題目。',options:['前往官方試題','稍後再看','只看答案','跳過'],answer:0,source:'https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=113190&q=1&s=0102&t=Q',note:'此題為官方 PDF 導讀卡；完整題目與答案請以考選部檔案為準。'}
];
const officialLinks=[['113 年完整題庫',sourcePages['113']],['97 年完整題庫',sourcePages['97']]];
const manualLinks=[
 ['97｜敷地計畫與都市設計','https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=097250&q=1&s=5001&t=Q','8 小時申論／設計'],
 ['97｜建築計畫與設計','https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=097250&q=1&s=6001&t=Q','8 小時申論／設計'],
 ['97｜建築構造與施工','https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=801&code=097250&q=1&s=3001&t=Q','選擇題＋官方更正答案']
];

