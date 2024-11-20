import { Client, Message} from 'npm:azure-iot-device';
import { clientFromConnectionString, Http } from 'npm:azure-iot-device-http';
import { ProtocolMode } from 'npm:@azure/msal-common';
import "@std/dotenv/load"

// Function to parse connection string and extract IoT Hub details
function parseConnectionString(connectionString: string) {
    const parts = connectionString.split(';');
    const settings: { [key: string]: string } = {};
  
    parts.forEach((part) => {
      const [key, value] = part.split('=');
      settings[key] = value;
    });
  
    return {
      DeviceID: settings['DeviceId'],
      HostName: settings['HostName'],
      SharedAccessKeyName: settings['SharedAccessKeyName'],
      SharedAccessKey: settings['SharedAccessKey'],
    };
  }

Deno.test('CSV to IoT Hub Test', async (t): Promise<void> => {
    const deviceConnectionString: string = Deno.env.get("IOTHUB_DEVICE_CONNECTION_STRING")!;

    console.log("test1");
    const client: Client = clientFromConnectionString(deviceConnectionString);
    console.log("test2");
  });
