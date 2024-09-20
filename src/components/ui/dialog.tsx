import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';
import { cn } from '../../lib/utils';
// trying to create a custom something
interface iContext {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<any>>;
  CloseBtn?: React.ReactNode;
  name?: string;
  DialogContext?: React.ReactNode;
}
const DialLogContext = createContext<iContext>({});
const Overlay = () => {
  const { setOpen } = useDialogContext();
  return (
    <div
      onClick={() => setOpen && setOpen(false)}
      className="fixed inset-0 z-50 bg-black/80- bg-green-900/60 group-[.active]:block hidden data-[state=open]:block data-[state=close]:hidden  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    ></div>
  );
};
const DialogContext = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Dialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const name = 'the coder and the coder';
  return (
    <DialLogContext.Provider
      value={{
        open,
        // CloseBtn: <Button onClick={() => {
        //     setOpen(!open)
        // }} >Close me here mf</Button>,
        setOpen,
        name,
        DialogContext: <DialogContext>{children}</DialogContext>,
      }}
    >
      <div className={cn('group', open && 'active')}>
        <Overlay />
        {children}
      </div>
    </DialLogContext.Provider>
  );
};
export const useDialogContext = () => useContext(DialLogContext);
// export const useLogisticsContext = () => useContext(LogisticsContext);

// export const closeBtn = useDialogContext()?.setOpen()
// export const open = useDialog()?.open
const Dialog_P = ({ children }: { children: React.ReactNode }) => {
  return <Dialog>{children}</Dialog>;
};
export const TY = ({ children }: { children: React.ReactNode }) => (
  <Dialog>{children} </Dialog>
);
export default Dialog_P;
