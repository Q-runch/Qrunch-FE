import { GrDocumentPdf } from 'react-icons/gr';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';

type IconType = React.ElementType;

const icons: Record<string, IconType> = {
  pdf: GrDocumentPdf,
  check: AiOutlineCheck,
  upload: FaCloudUploadAlt,
  search: FcSearch,
};

export default icons;
