"use strict";

import { Users, Tickets, RecordHistory } from '../models'
import auth from '../auth'
import sha1 from 'sha1'

export const get_index = [auth.isAuthorized, (req, res) =>  {
    Users.findAll({
        where: { name: req.session.username }
    }).then(data => {
        res.json(data);
    })
}];

export const get_id = [auth.isAuthorized, (req, res, id) => {
    Users.findAll({
        where: {id},
        include: [Tickets]
    }).then(data => {
        res.json(data)
    })
}];

export const post_login = (req, res) => {
    let result = false;
    const username = req.body.username ? req.body.username : "";
    const password = req.body.password ? req.body.password : "";
    Users.count({
        where: {
            name: username,
            password: sha1(password)
        }
    }).then( count => {
        if (count > 0) {
            req.session.username = username;
            result = true
        }
        res.json({result})
    });
};
