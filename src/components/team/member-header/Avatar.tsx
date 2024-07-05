import { ChangeEvent, useEffect, useRef, useState } from 'react';
import cl from './member-header.module.scss';

interface AvatarProps {
  src: string;
  name: string;
  isLoading: boolean;
}

const Avatar = ({ name, isLoading, src }: AvatarProps) => {
  const [newAvatar, setNewAvatar] = useState<string | undefined>(null);
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setNewAvatar(JSON.parse(localStorage.getItem(name)));
  }, [name, isLoading]);

  const handleClickAvatar = () => {
    if ('click' in inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'loadend',
      function (result) {
        setNewAvatar(result.target.result.toString());
        localStorage.setItem(name, JSON.stringify(result.target.result));
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input type="file" className={cl.file} ref={inputFileRef} onChange={e => handleChangeAvatar(e)} />
      <img src={newAvatar ? newAvatar : src} alt={name} className={cl.avatar} onClick={handleClickAvatar} />
    </>
  );
};

export default Avatar;
