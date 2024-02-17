import { GrDocumentPdf } from 'react-icons/gr';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import { FaRegClipboard } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';

type IconType = React.ElementType;

const icons: Record<string, IconType> = {
  pdf: GrDocumentPdf,
  check: AiOutlineCheck,
  upload: FaCloudUploadAlt,
  search: FcSearch,
  clipboard: FaRegClipboard,
  quiz: MdQuiz,
};

export default icons;
