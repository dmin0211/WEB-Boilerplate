import { get } from '@utils/fetch-module';

async function getTest() {
  const response = await get('v1/test');
  return response;
}

export default getTest;
