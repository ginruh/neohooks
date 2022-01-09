import { Container, Flex } from '@chakra-ui/react';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateWebhookMutation } from '../../services/webhook';
import { RootState } from '../../store';
import { Loader } from './Loader';

/*
  Route Path: /
*/
export function Home() {
  const navigate = useNavigate();
  const webhooks = useSelector((state: RootState) => state.webhooks);
  const [createWebhook, createWebhookResult] = useCreateWebhookMutation();

  /*
    Trigger create webhook when localstorage syncs with webhooks slice
    If length of webhooks slice array is 0 then we will create a new webhook
    else we will reuse the previous webhook
  */
  useEffect(() => {
    if (webhooks.length === 0) {
      createWebhook();
    } else {
      navigate(`/${webhooks[0].toString()}`);
    }
  }, []);

  /*
    If mutation status is fullfilled
    then navigate to /:id path
  */
  useEffect(() => {
    if (createWebhookResult.status === QueryStatus.fulfilled) {
      const webhookId = createWebhookResult.data.id;
      navigate(`/${webhookId}`);
    }
  }, [createWebhookResult.status]);

  return (
    <Container maxWidth="container.xl" padding={0} height="100vh">
      <Flex direction="column" height="full" width="full">
        <Loader />
      </Flex>
    </Container>
  );
}
