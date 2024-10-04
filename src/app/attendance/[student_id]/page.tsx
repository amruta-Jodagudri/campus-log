'use client'
import { useParams } from 'next/navigation';
import StudentInfo from './StudentInfo';
import AttendenceHistory from './attendence-history/AttendenceHistory';
import CurrentYearAttendence from './current-year-attendence/CurrentYearAttendence';

export default function StudentAttendencePage() {
    const { student_id } = useParams(); // Destructure student_id from the params

    return (
        <div className='bg-pink-300'>
            <div className="flex justify-between">
                {/* StudentInfo with 5px left margin */}
                <div className="ml-[5px]">
                    <StudentInfo />
                </div>
                
                {/* AttendenceHistory placed next to StudentInfo */}
                <div className="ml-4">
                    <AttendenceHistory />
                </div>
            </div>
            <CurrentYearAttendence/>
        </div>
    );
}
