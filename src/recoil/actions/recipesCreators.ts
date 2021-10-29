/* eslint-disable no-console */
import axios from 'axios';
import { selector } from 'recoil';

async function recipes() {
  try {
    const { data: { data }} = await axios.get('https://virated-api.herokuapp.com/recipes');
    return data;
  } catch(error) {return error}
}

const renderRecipe = selector({
  key: 'RENDER_RECIPE',
  get: () => recipes(),
})

export default renderRecipe;