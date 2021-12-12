import { Link } from 'react-router-dom';
import profile from "../images/profile.png"
const MyStatus = () => {

    return (
        <div className='mystatus'>
            <h2>Profile</h2>
            <div className='mystatus-container'>
                <img src={profile}></img>
                <table className='mystatus-table'>
                    <tbody>
                        <tr>
                            <td>名前</td>
                            <td>：</td>
                            <td>餅草 よもぎ/Sora513</td>
                        </tr>
                        <tr>
                            <td>所属</td>
                            <td>：</td>
                            <td>名古屋工業大学 機械工学科2年</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Next-MICON</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>nitech Create</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>NITMic</td>
                        </tr>
                        <tr>
                            <td>環境</td>
                            <td>：</td>
                            <td>Thnkpad E14</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Majestouch Stingray</td>
                        </tr>
                        <tr>
                            <td>趣味</td>
                            <td>：</td>
                            <td>初音ミク/運転/旅</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>物理/数学/ねこ</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyStatus