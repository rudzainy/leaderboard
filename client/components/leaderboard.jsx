import React from 'react';
import BoardList from './board-list';

export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <div className='outer'>
                    <div className='logo'/>
                    <div className='title'>Leaderboard</div>
                    <div className='subtitle'>Select your teammate to give them points</div>
                    <BoardList/>
                </div>
            </div>
        );
    }
}
