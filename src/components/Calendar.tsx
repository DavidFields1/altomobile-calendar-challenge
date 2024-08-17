// import React, { useState } from "react";
// import { MonthView } from "./MonthView";

export const Calendar: React.FC = () => {
    // const [currentDate, setCurrentDate] = useState(new Date());

    // const nextMonth = () => {
    //     setCurrentDate(
    //         new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    //     );
    // };

    // const prevMonth = () => {
    //     setCurrentDate(
    //         new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    //     );
    // };

    // let sign = prompt("What's your sign?");

    // if (sign?.toLowerCase() == "scorpio") {
    //     alert("Wow! I'm a Scorpio too!");
    // }

    // there are many ways to use the prompt feature
    // sign = window.prompt(); // open the blank prompt window
    // sign = prompt(); //  open the blank prompt window
    // sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
    // sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"

    return (
        <div className="m-auto w-full h-full bg-white rounded-md shadow-sm">
            {/* nav */}
            <div className="flex justify-around p-8 items-center">
                <div>
                    <button className="bg-blue-400 p-2 rounded-lg min-w-32 text-white font-semibold hover:bg-blue-500">
                        Previous
                    </button>
                </div>

                <div className="font-bold text-xl">
                    <h1>August, 2024</h1>
                </div>

                <div>
                    <button className="bg-blue-400 p-2 rounded-lg min-w-32 text-white font-semibold hover:bg-blue-500">
                        Next
                    </button>
                </div>
            </div>
            {/* month view */}
            <div className="w-4/5 h-3/4 m-auto">
                <div className="flex justify-around border border-solid font-medium bg-blue-50">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                {/* <div className="flex flex-row border border-solid font-medium">
                    <div className="flex border border-solid font-medium">
                        <div className="basis-1/6">x</div>
                        <div className="flex">x</div>
                        <div className="flex">x</div>
                        <div className="flex">x</div>
                        <div className="grow">1</div>
                        <div className="flex">2</div>
                        <div className="flex">3</div>
                    </div>
                </div> */}
                <div className="flex flex-row text-end">
                    <div className="basis-1/7 bg-gray-300 h-36 border border-solid p-2">
                        <div>28</div>
                    </div>
                    <div className="basis-1/7 bg-gray-300 h-36 border border-solid p-2">
                        <div>29</div>
                    </div>
                    <div className="basis-1/7 bg-gray-300 h-36 border border-solid p-2">
                        <div>30</div>
                    </div>
                    <div className="basis-1/7 bg-gray-300 h-36 border border-solid p-2">
                        <div>31</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>1</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div className="mb-1">2</div>
                        <div className="max-h-24 overflow-y-scroll">
                            <div className="bg-purple-400 text-center rounded-md mb-1">
                                <p>Dentist Appointment</p>
                            </div>
                            <div className="bg-purple-400 text-center rounded-md mb-1">
                                <p>Dentist Appointment</p>
                            </div>
                            <div className="bg-purple-400 text-center rounded-md mb-1">
                                <p>Dentist Appointment</p>
                            </div>
                            <div className="bg-purple-400 text-center rounded-md mb-1">
                                <p>Dentist Appointment</p>
                            </div>
                            <div className="bg-purple-400 text-center rounded-md mb-1">
                                <p>Dentist Appointment</p>
                            </div>
                            <div className="bg-purple-400 text-center rounded-md mb-1">
                                <p>Dentist Appointment</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>3</div>
                    </div>
                </div>
                <div className="flex flex-row text-end">
                    <div className="basis-1/7 -36 border border-solid p-2">
                        <div>4</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>5</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>6</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>7</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>8</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>9</div>
                        <div className="bg-purple-400 text-center rounded-md">
                            <p>Dentist Appointment</p>
                        </div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>10</div>
                    </div>
                </div>
                <div className="flex flex-row text-end">
                    <div className="basis-1/7 -36 border border-solid p-2">
                        <div>11</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>12</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>13</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>14</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>15</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2 bg-blue-200">
                        <div>16</div>
                        <div className="bg-purple-400 text-center rounded-md">
                            <p>Dentist Appointment</p>
                        </div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>17</div>
                    </div>
                </div>
                <div className="flex flex-row text-end">
                    <div className="basis-1/7 -36 border border-solid p-2">
                        <div>18</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>19</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>20</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>21</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>22</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>23</div>
                        <div className="bg-purple-400 text-center rounded-md">
                            <p>Dentist Appointment</p>
                        </div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>24</div>
                    </div>
                </div>
                <div className="flex flex-row text-end">
                    <div className="basis-1/7 -36 border border-solid p-2">
                        <div>25</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>26</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>27</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>28</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>29</div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>30</div>
                        <div className="bg-purple-400 text-center rounded-md">
                            <p>Dentist Appointment</p>
                        </div>
                    </div>
                    <div className="basis-1/7 h-36 border border-solid p-2">
                        <div>31</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
