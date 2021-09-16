import {Dispatch} from 'redux'
import { TICKER } from './type'

export class TickerDispatcher {
    
    private readonly dispatch: Dispatch

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch
    }

    updateBID = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_BID
            })
            
        } 
        catch (error) {
            console.log("In updateBID"+error)
        }
    }

    updateBIDSIZE = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_BID_SIZE
            })
            
        } 
        catch (error) {
            console.log("In updateBIDSIZE"+error)
        }
    }

    updateASK = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_ASK
            })
            
        } 
        catch (error) {
            console.log("In updateASK"+error)
        }
    }

    updateASKSIZE = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_ASK_SIZE
            })
            
        } 
        catch (error) {
            console.log("In updateASKSIZE"+error)
        }
    }

    updateDAILYCHANGE = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_DAILY_CHANGE
            })
            
        } 
        catch (error) {
            console.log("In updateDAILYCHANGE"+error)
        }
    }

    updateDAILYCHANGERELATIVE = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_DAILY_CHANGE_RELATIVE
            })
            
        } 
        catch (error) {
            console.log("In updateDAILYCHANGERELATIVE"+error)
        }
    }

    updateLASTPRICE = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_LAST_PRICE
            })
            
        } 
        catch (error) {
            console.log("In updateLASTPRICE"+error)
        }
    }

    updateVOLUME = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_VOLUME
            })
            
        } 
        catch (error) {
            console.log("In updateVOLUME"+error)
        }
    }

    updateHIGH = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_HIGH
            })
            
        } 
        catch (error) {
            console.log("In updateHIGH"+error)
        }
    }

    updateLOW = (value:string): void => {
        try {
            this.dispatch({
                payload: {value},
                type: TICKER.UPATE_LOW
            })
            
        } 
        catch (error) {
            console.log("In updateLOW"+error)
        }
    }


}
