import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {filterDateRange} from '../../AC'
import {connect} from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => this.props.filterDateRange(DateUtils.addDayToRange(day, this.props))

    render() {
        const { from, to } = this.props
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

export default connect(
    (state) => ({
        from: state.filterDateRange.from,
        to: state.filterDateRange.to
    }),
    { filterDateRange }
)(DateRange)