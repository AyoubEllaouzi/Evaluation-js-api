const { getPays, getData } = require('../services/countryService');
const axios = require('axios');


jest.mock('axios');

describe('getPays', () => {
  it('fetches pays data and renders paysView', async () => {
    const paysData = [{ name: 'Cyprus' }];
    axios.get.mockResolvedValue({ data: paysData });
    
    const req = {};
    const res = {
      render: jest.fn()
    };

    await getPays(req, res);

    expect(axios.get).toHaveBeenCalledWith(process.env.DEV_URL);
    expect(res.render).toHaveBeenCalledWith('paysView', { pays: paysData });
  });
});


describe('getData', () => {
    it('renders nothing if countryName is not provided', async () => {
        const paysData = [{ name: 'test' }];
        axios.get.mockResolvedValue({ data: paysData });
    
        const req = { query: {} };
        const res = {
          render: jest.fn()
        };
    
        await getData(req, res);
    
        expect(axios.get).toHaveBeenCalledWith(process.env.DEV_URL);
        expect(res.render).not.toHaveBeenCalled();
      });
});