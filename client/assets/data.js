import dailyquest from './daily-quest.png';
import codenamehermes from './codename-hermes.png';
import subslify from './nutri.png';
const data = new Map();

data.set(1, {'owner': 'h3r01a','repo': 'Daily-Quest', 'projectName': 'Daily Quest','tech_stack': ['React', 'Postgres', 'MongoDB', 'Docker'], 'picture': dailyquest});
data.set(2, {'owner':'Scratch-Tech-Software', 'repo': 'Subslify', 'projectName': 'Subslify','tech_stack': ['React'], 'picture': subslify});
data.set(3, {'owner': 'oslabs-beta','repo': 'Codename-Hermes', 'projectName': 'Codename Hermes','tech_stack': ['Kafka', 'RabbitMQ', 'Docker'], 'picture': codenamehermes});


export default data;