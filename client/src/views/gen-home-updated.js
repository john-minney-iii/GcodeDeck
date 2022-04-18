import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios"; 

export default function GenHome(props) {
    const [gcodeList, setGcodeList] = useState([]); // Gcode data struct

    // Functions for Gcode Data Struct ---------------------------------

    const addGcodeBlock = (block) => {
        if (gcodeList.length !== 0) {
            let tempGcode = [...gcodeList];
            tempGcode.push(block);
            setGcodeList(tempGcode);
        } else {
            setGcodeList([block]);
        }
    };

    const consolePrintGcode = () => {
        gcodeList.forEach((block) => {
            block.split(',').forEach((line) => console.log(line));
        });
    };

    const gcodeUndo = () => {
        let tempGcode = [...gcodeList];
        tempGcode.pop();
        setGcodeList(tempGcode);
    };

    // -----------------------------------------------------------------

}
