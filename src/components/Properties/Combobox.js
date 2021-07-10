import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Combobox = () => {
const [toggleState, setToggleState] = useState(false);
  return (
    <>
      <div className="select__isSelected" onClick={() => setToggleState(!toggleState)}>
        <span>43</span>
        <FaChevronDown />
      </div>
      <div className={toggleState ? "select__option select__option-open" : "select__option"}>
        <ul>
          <li>
            <span>34</span>
          </li>
          <li>
            <span>35</span>
          </li>
          <li>
            <span>36</span>
          </li>
          <li>
            <span>37</span>
          </li>
          <li>
            <span>38</span>
          </li>
          <li>
            <span>39</span>
          </li>
          <li>
            <span>41</span>
          </li>
          <li>
            <span>42</span>
          </li>
          <li>
            <span>43</span>
          </li>
          <li>
            <span>44</span>
          </li>
          <li>
            <span>45</span>
          </li>
          <li>
            <span>46</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Combobox;
