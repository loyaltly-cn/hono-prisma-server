import type { Hono } from "hono"
import wx from '../../lib/wx'
export default (app: Hono) => {
    app.post('/login/mp',async c =>{
        const {code} = await c.req.json()
        const openid = await wx.getOpenid(code)

        c.json({ message: code, name: code ,openid: openid })
    })
}
