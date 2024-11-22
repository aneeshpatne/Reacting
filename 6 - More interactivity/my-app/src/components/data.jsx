import './styles/dataSkill.css';
const data = [["apple","banana","cherry","date","elderberry","fig","grape"]];
export default function SkillData(){
    return(<div>
        <ul class="custom-list">
     {data[0].map((d1, index) => (
          <li key={index}>{d1}</li>
        ))}
        </ul>
    </div>)

};