import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Layout_Components/Header";
import SelectRegions from "../Components/SelectRegion_Components/SelectRegions";
import Writing from "../Components/WritingPage_Components/Writing";
import Modify from "../Components/Modify_Components/Modify";

function ModifyPage(){

  return(
    <div>
      <Modify/>
    </div>
  );
}

export default ModifyPage;