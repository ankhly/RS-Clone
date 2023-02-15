export const converterLogic = (): void => {
  const eurId = 451;
  const usdId = 431;
  const rubId = 456;
  const uahId = 449;
  const plnId = 452;

  const getExchangeRates = async (curId: number) => {
    const response = await fetch(`https://www.nbrb.by/api/exrates/rates/${curId}?periodicity=0`);
    const data = await response.json();
    return data.Cur_OfficialRate;
  };

  const inputWrap = document.querySelector('.currency-converter__inputs') as HTMLDivElement;
  const eurInput = document.querySelector('.input-eur') as HTMLInputElement;
  const usdInput = document.querySelector('.input-usd') as HTMLInputElement;
  const rubInput = document.querySelector('.input-rub') as HTMLInputElement;
  const uahInput = document.querySelector('.input-uah') as HTMLInputElement;
  const plnInput = document.querySelector('.input-pln') as HTMLInputElement;
  const bynInput = document.querySelector('.input-byn') as HTMLInputElement;

  async function bynConverter() {
    eurInput.value = ((+bynInput.value / await getExchangeRates(eurId)).toFixed(4)).replace(/[,.]?0+$/, '');
    usdInput.value = ((+bynInput.value / await getExchangeRates(usdId)).toFixed(4)).replace(/[,.]?0+$/, '');
    rubInput.value = ((+bynInput.value / await getExchangeRates(rubId) * 100).toFixed(4)).replace(/[,.]?0+$/, '');
    uahInput.value = ((+bynInput.value / await getExchangeRates(uahId) * 100).toFixed(4)).replace(/[,.]?0+$/, '');
    plnInput.value = ((+bynInput.value / await getExchangeRates(plnId) * 10).toFixed(4)).replace(/[,.]?0+$/, '');
  }

  inputWrap.addEventListener('click', (el) => {
    const target = el.target as HTMLInputElement;
    if (target.classList.contains('input-byn')) {
      target.addEventListener('input', bynConverter);
    }
    if (target.classList.contains('input-usd')) {
      target.addEventListener('input', async () => {
        bynInput.value = ((+target.value * await getExchangeRates(usdId)).toFixed(4)).replace(/[,.]?0+$/, '');
        await bynConverter();
      });
    }
    if (target.classList.contains('input-eur')) {
      target.addEventListener('input', async () => {
        bynInput.value = ((+target.value * await getExchangeRates(eurId)).toFixed(4)).replace(/[,.]?0+$/, '');
        await bynConverter();
      });
    }
    if (target.classList.contains('input-rub')) {
      target.addEventListener('input', async () => {
        bynInput.value = ((+target.value * await getExchangeRates(rubId) / 100).toFixed(4)).replace(/[,.]?0+$/, '');
        usdInput.value = ((+bynInput.value / await getExchangeRates(usdId)).toFixed(4)).replace(/[,.]?0+$/, '');
        eurInput.value = ((+bynInput.value / await getExchangeRates(eurId)).toFixed(4)).replace(/[,.]?0+$/, '');
        uahInput.value = ((+bynInput.value / await getExchangeRates(uahId) * 100).toFixed(4)).replace(/[,.]?0+$/, '');
        plnInput.value = ((+bynInput.value / await getExchangeRates(plnId) * 10).toFixed(4)).replace(/[,.]?0+$/, '');
      });
    }
    if (target.classList.contains('input-uah')) {
      target.addEventListener('input', async () => {
        bynInput.value = ((+target.value * await getExchangeRates(uahId) / 100).toFixed(4)).replace(/[,.]?0+$/, '');
        eurInput.value = ((+bynInput.value / await getExchangeRates(eurId)).toFixed(4)).replace(/[,.]?0+$/, '');
        usdInput.value = ((+bynInput.value / await getExchangeRates(usdId)).toFixed(4)).replace(/[,.]?0+$/, '');
        plnInput.value = ((+bynInput.value / await getExchangeRates(plnId) * 10).toFixed(4)).replace(/[,.]?0+$/, '');
        rubInput.value = ((+bynInput.value / await getExchangeRates(rubId) * 100).toFixed(4)).replace(/[,.]?0+$/, '');
      });
    }
    if (target.classList.contains('input-pln')) {
      target.addEventListener('input', async () => {
        bynInput.value = ((+target.value * await getExchangeRates(plnId) / 10).toFixed(4)).replace(/[,.]?0+$/, '');
        eurInput.value = ((+bynInput.value / await getExchangeRates(eurId)).toFixed(4)).replace(/[,.]?0+$/, '');
        usdInput.value = ((+bynInput.value / await getExchangeRates(usdId)).toFixed(4)).replace(/[,.]?0+$/, '');
        rubInput.value = ((+bynInput.value / await getExchangeRates(rubId) * 100).toFixed(4)).replace(/[,.]?0+$/, '');
        uahInput.value = ((+bynInput.value / await getExchangeRates(uahId) * 100).toFixed(4)).replace(/[,.]?0+$/, '');
      });
    }
  });
};
