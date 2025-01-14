import React from "react";

import { FileDownloadIcon } from "assets/icons";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import IconButton from "components/buttons/IconButton";
import { IExport } from "components/export/interfaces";
import { ExportContainer } from "components/export/styles";

const Export = ({ exportReport }: IExport): React.ReactElement => {
  return (
    <ExportContainer>
      <IconButton
        onClick={exportReport}
        Icon={FileDownloadIcon}
        buttonType={buttonTypes.success}
        tooltipText='Export'
      />
    </ExportContainer>
  );
};

export default Export;

Export.displayName = "Export";
