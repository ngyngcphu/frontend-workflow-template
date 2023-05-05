import { ReactNode, useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { SendNotiModal } from "../modals/SendNotiModal";
import { TemplatesName } from "../name/TemplatesName";
import { ScheduleSend } from "./ScheduleSend";
import { MembersName } from "../name/MembersName";
import { SendNotiInterface } from "../interfaces/SendNotiInterface";

function Proposal() {
  const [show, setShow] = useState<boolean>(false);
  const [temp, setTemp] = useState<Array<string>>(MembersName);

  const [notiData, setNotiData] = useState<SendNotiInterface>({
    subject: "",
    sender: [],
    receiver: [],
    CC: [],
    BCC: [],
    timeSchedule: "",
    dateSchedule: "",
    link: ""
  });

  useEffect(() => {
    setTemp(MembersName);
  }, [show]);

  const handleClear = () => {
    console.log(notiData);
    setNotiData({
      subject: "",
      sender: [],
      receiver: [],
      CC: [],
      BCC: [],
      timeSchedule: "",
      dateSchedule: "",
      link: ""
    });
  };

  return (
    <div>
      <span onClick={() => setShow(true)}>{TemplatesName[0]}</span>
      <Modal show={show} size='6xl' popup={true} onClose={() => setShow(false)}>
        <Modal.Body className='!p-0'>
          <SendNotiModal notiData={notiData} setNotiData={setNotiData} temp={temp} setTemp={setTemp} />
        </Modal.Body>
        <Modal.Footer className='flex justify-between'>
          <Button
            className='bg-gray-400 hover:!bg-[#444444] dark:bg-gray-600 dark:hover:!bg-[#444444]'
            onClick={() => {
              handleClear();
              setShow(false);
              setTemp(MembersName);
            }}
          >
            Cancel
          </Button>
          <div className='flex gap-5 items-center justify-items-center'>
            <ScheduleSend />
            <Button
              className='bg-[#00B1E5] hover:!bg-blue-500 dark:bg-blue-100 dark:!hover:!bg-blue-50'
              onClick={() => {
                handleClear();
                setShow(false);
                setTemp(MembersName);
              }}
            >
              Send
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Council() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <span onClick={() => setShow(true)}>{TemplatesName[1]}</span>
      <Modal show={show} size='3xl' popup={true} onClose={() => setShow(false)}>
        <Modal.Body>
          <div className='text-center'>
            <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>Ahihi</h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={() => setShow(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export const Notification: Array<ReactNode> = [<Proposal />, <Council />];
