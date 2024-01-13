import express from 'express';
import Nilai from '../../models/nilai.js';
import forAdmin from '../../controllers/auth.js'

const router = express.Router();

router.get('/', (req, res) => {
    Nilai.findAll().then((results) => {
        res.render('admin/nilai/index', { 
            nilais: results, 
            user: req.session.user || "" });
    });
})

router.get('/create', (req, res) => {
    res.render('admin/nilai/create', { user: req.session.user || "" });
})

router.get('/edit/:id', forAdmin, (req, res) => {
    Nilai.findOne({ where: { id: req.params.id } }
    ).then((results) => {
        res.render('admin/nilai/edit', { nilai: results, user: req.session.user || "" });
    })
})

router.post('/api/nilais', (req, res) => {
    Nilai.create({ 
        nim: req.body.nim,
        kode_matkul: req.body.kode_matkul,
        nilai_uts: req.body.nilai_uts,
        nilai_tugas: req.body.nilai_tugas,
        nilai_uas: req.body.nilai_uas
    }
    ).then((results) => {
        res.json({ status: 200, error: null, Response: results });
    }).catch(err => {
        res.json({ status: 502, error: err });
    })
})

router.put('/api/nilai/:id', (req, res) => {
    Nilai.update({ 
        nim: req.body.nim,
        kode_matkul: req.body.kode_matkul,
        nilai_uts: req.body.nilai_uts,
        nilai_tugas: req.body.nilai_tugas,
        nilai_uas: req.body.nilai_uas
    }, { where: { id: req.params.id } }
    ).then((results) => {
        res.json({ status: 200, error: null, Response: results });
    }).catch(err => {
        res.json({ status: 502, error: err });
    })
})

router.delete('/api/nilai/:id', (req, res) => {
    Nilai.destroy({ where: { id: req.params.id } }
    ).then(() => {
        res.json({ status: 200, error: null, Response: results });
    }).catch(err => {
        res.json({ status: 500, error: err, Response: {} });
    })
})

export default router;