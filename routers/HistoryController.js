"use strict";

import { Users, Tickets, RecordHistory } from '../models'
import auth from '../auth'

export const get_index = [auth.isAuthorized, (req, res, id) => {
    RecordHistory.findAll({
        where: { id },
        include: [Users, Tickets]
    }).then(data => {
        res.json(data);
    })
}];
