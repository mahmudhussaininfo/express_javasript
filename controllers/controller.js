const path = require('path');

const homepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}
const aboutpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}

// export
module.exports = {
    homepage,
    aboutpage

}