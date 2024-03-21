const axios = require('axios');

const getPays = async (req, res) => {
    try {
        const response = await axios.get(process.env.DEV_URL);
        const pays = response.data;
        res.render('paysView', { pays });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};

const getData = async (req, res) => {
    try {
        const response = await axios.get(process.env.DEV_URL);
        const pays = response.data;
        const countryName = req.query.name;

        if (countryName) {
            const filteredPays = pays.find(country => country.name.common === countryName);
            if (filteredPays) {
                res.render('countryInfo', { country: filteredPays });
            }
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};

module.exports = { getPays, getData };
