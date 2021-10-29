import axios from 'axios';
import { selector } from 'recoil';

async function recomendation() {
  try {
    const { data: { data }} = await axios.get('https://virated-api.herokuapp.com/recipes?recommended=1');
    return data;
  } catch(error) {return error}
}

const renderRecomendation = selector({
  key: 'RENDER_RECOMENDATION',
  get: () => recomendation(),
})

export default renderRecomendation;