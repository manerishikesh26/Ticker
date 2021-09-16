import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TickerDispatcher } from '../Actions/TickerActions'
import { IData } from '../Interfaces'
import { BitcoinIcon } from './SvgIcons/BitCoin'

interface IOBJECT {
    TickerStore: IData
}


function Ticker(props: any) {

    const TickerStore = useSelector((state: IOBJECT) => state.TickerStore)

    const [data, setData] = useState('')
    
    const dispatch = useDispatch()
    const TickerDispatch = new TickerDispatcher(
        dispatch
    )

    function WsOpenClose(value:string) {
       
        const connection = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
        let msg = JSON.stringify({
            event: 'subscribe',
            channel: 'ticker',
            symbol: 'tBTCUSD'
            })
        
        if (value==='close'){
            connection.close()
            return
        }
        else if(value==='open') {
            connection.onopen =()=>connection.send(msg)
            connection.onmessage = (msg:any) => setData(msg.data)
        }
        
    }
    
  

    useEffect(() => {
        const arrayD = data.split(',')
        if(arrayD.length === 11)
        {
            arrayD[0] = arrayD[0].replace('[','')
            arrayD[1] = arrayD[1].replace('[','')
            arrayD[10] = arrayD[10].replace(']]','')
            const a1 = arrayD[1]
            const a2 = arrayD[2].substr(0,7)
            const a3 = arrayD[3]
            const a4 = arrayD[4].substr(0,7)
            const a5 = arrayD[5].substr(0,7)
            const a6 = (parseFloat(arrayD[6]) * 100).toFixed(2)
            const a7 = arrayD[7]
            const a8 = arrayD[8].substr(0,7)
            const a9 = arrayD[9]
            const a10 = arrayD[10]
            TickerDispatch.updateBID(a1)
            TickerDispatch.updateBIDSIZE(a2)
            TickerDispatch.updateASK(a3)
            TickerDispatch.updateASKSIZE(a4)
            TickerDispatch.updateDAILYCHANGE(a5)
            TickerDispatch.updateDAILYCHANGERELATIVE(a6)
            TickerDispatch.updateLASTPRICE(a7)
            TickerDispatch.updateVOLUME(a8)
            TickerDispatch.updateHIGH(a9)
            TickerDispatch.updateLOW(a10)
        }
      },[data, TickerDispatch])

    
    return(
        <div className="position-absolute top-50 translate-middle start-50 " >
            <button type="button" style={{ marginRight:'5px',marginBottom:'5px'}} onClick={()=>{WsOpenClose('open')}} className="btn btn-dark">Connect</button>
            <button type="button" style={{ marginBottom:'5px'}} onClick={()=>{WsOpenClose('close')}} className="btn btn-dark">Disconnect</button>

        <div className="card text-white bg-dark mb-3" style={{ maxWidth:'27rem' }} >
            
            <div className="card-body">
                <div style={{position:'absolute', left:'1px', bottom:'37px'}}>  
            <BitcoinIcon/>
            </div>
            <div className="container">
                <div className="row">
                    
                    <div className="col leftcol" >BTC/USD</div>
                    <div className="col rightcol" > {TickerStore.BID}    </div>
                    <div className="w-100"></div>
                    <div className="col leftcol" ><label className="lightcolor">VOL</label> &nbsp; {TickerStore.VOLUME} <label className="lightcolor" style={{ textDecoration:'underline'}}>BTC</label></div>
                    {TickerStore.DAILY_CHANGE?.charAt(0) === '-' ?
                    <div className="col rightcol" style={{color:'red'}}>{TickerStore.DAILY_CHANGE.substring(1)}<i className="fa fa-fw fa-caret-down"></i>({TickerStore.DAILY_CHANGE_RELATIVE.substring(1)+'%'}) </div>
                    : <div className="col rightcol" style={{color:'lightgreen'}}>{TickerStore.DAILY_CHANGE}<i className="fa fa-fw fa-caret-up"></i>({TickerStore.DAILY_CHANGE_RELATIVE+'%'}) </div>}
                    <div className="w-100"></div>
                    <div className="col leftcol" ><label className="lightcolor">LOW</label>  {TickerStore.LOW}</div>
                    <div className="col rightcol" ><label className="lightcolor">HIGH</label>  {TickerStore.HIGH}</div>
                </div>
                </div>
                </div>
                
        </div>
        </div>
    )
}

export default Ticker