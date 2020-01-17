"use strict";

import { Users, Tickets, RecordHistory } from '../models'
import auth from "../auth";

export const get_id = [auth.isAuthorized, (req, res, id) => {
    Tickets.findAll({
        where: {id},
        include: [Users]
    }).then(data => {
        res.json(data)
    })
}];
