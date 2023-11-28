import dailyquest1 from './daily-quest-1.png';
import dailyquest2 from './daily-quest-2.png';
import codenamehermes from './codename-hermes.png';
import subslify1 from './subslify-1.png';
import subslify2 from './subslify-2.png';
import subslify3 from './subslify-3.png';
import subslify4 from './subslify-4.png';
const data = new Map();

data.set(1, {'owner': 'h3r01a','repo': 'Daily-Quest', 'projectName': 'Daily Quest','tech_stack': ['React', 'Postgres', 'MongoDB', 'Docker'], 'pictures': [dailyquest1,dailyquest2]});
data.set(2, {'owner':'Scratch-Tech-Software', 'repo': 'Subslify', 'projectName': 'Subslify','tech_stack': ['React'], 'pictures': [subslify1,subslify2, subslify3, subslify4]});
data.set(3, {'owner': 'oslabs-beta','repo': 'Codename-Hermes', 'projectName': 'Codename Hermes','tech_stack': ['Kafka', 'RabbitMQ', 'Docker'], 'pictures': [codenamehermes]});


export default data;