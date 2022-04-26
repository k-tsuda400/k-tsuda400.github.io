import React from 'react'
import Button from './Button'
import './control-panel.css'

function ControlPanel({ play, isPlaying, duration, currentTime }) {
  function secondsToHms(secondsCur, secondsDur) {
    let timeCurRet // 戻り値
    let timeDurRet // 戻り値

    // 1. 現在の時刻 secondsCur
    if (!secondsCur) timeCurRet = '0:00';

    let durationCur = secondsCur
    let hoursCur = durationCur / 3600
    durationCur = durationCur % 3600

    let minCur = parseInt(durationCur / 60)
    durationCur = durationCur % 60

    let secCur = parseInt(durationCur)

    if (secCur < 10) {
      secCur = `0${secCur}`
    }
    if (minCur < 10) {
      minCur = `${minCur}`
    }

    if (parseInt(hoursCur, 10) > 0) {
      timeCurRet = `${parseInt(hoursCur, 10)}:${minCur}:${secCur}`
    } else if (minCur == 0) {
      timeCurRet = `0:${secCur}`
    } else {
      timeCurRet = `${minCur}:${secCur}`
    }
    
    // --------------
    // 2. 合計再生時間 secondsDur
    let durationDur = secondsDur
    let hoursDur = durationDur / 3600
    durationDur = durationDur % 3600

    let minDur = parseInt(durationDur / 60)
    durationDur = durationDur % 60

    let secDur = parseInt(durationDur)

    if (secDur < 10) {
      secDur = `0${secDur}`
    }
    if (minDur < 10) {
      minDur = `${minDur}`
    }

    if (parseInt(hoursDur, 10) > 0) {
      timeDurRet = `${parseInt(hoursDur, 10)}:${minDur}:${secDur}`
    } else if (minDur == 0) {
      timeDurRet =  `0:${secDur}`
    } else {
      timeDurRet =  `${minDur}:${secDur}`
    }

    return `${timeCurRet} / ${timeDurRet}`
  }

  return (
    <div className='control-panel'>
      <div className='timer'>{secondsToHms(currentTime, duration)}</div>
      <Button play={play} isPlaying={isPlaying} />
    </div>
  )
}
export default ControlPanel
