import React from "react";

import { useDragAndDrop } from "components/uploads/hooks/useDragAndDrop";
import { IDragAndDrop } from "components/uploads/interfaces";

const DragAndDrop = ({
  multiple = false,
  fileType = {},
  onChange,
}: IDragAndDrop): React.ReactElement => {
  const {
    classes,
    attachments,
    getRootProps,
    getInputProps,
    convertFileToIcon,
  } = useDragAndDrop({ multiple, fileType, onChange });

  return (
    <section>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <span className={classes.attachment}>
          {attachments &&
            attachments.map((item, index) => {
              let fileName = item.path;

              if (item instanceof File) fileName = item.name;

              return convertFileToIcon(fileName, index);
            })}
        </span>
      </aside>
    </section>
  );
};

export default DragAndDrop;

DragAndDrop.displayName = "DragAndDrop";
