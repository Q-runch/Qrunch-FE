import { GrDocumentPdf } from 'react-icons/gr';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';

type IconType = React.ElementType; // 아이콘의 타입을 ElementType으로 정의

const icons: Record<string, IconType> = {
  pdf: GrDocumentPdf,
  check: AiOutlineCheck,
  upload: FaCloudUploadAlt,
};

export default icons;
