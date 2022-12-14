import ProjectEnvGithubAction from "../src/project-env-github-action";
import * as os from "os";

describe('Project-Env Github Action', () => {

    const ENV_BACKUP = process.env;

    beforeEach(() => {
        process.env = {
            ...{
                'INPUT_CONFIG-FILE': '__tests__/project-env.toml',
                'INPUT_CLI-DEBUG': 'true',
                'RUNNER_TEMP': os.tmpdir()
            },
            ...ENV_BACKUP
        };
    });

    afterAll(() => {
        process.env = ENV_BACKUP;
    });

    test('works', async () => {
        await new ProjectEnvGithubAction().run();

        expect(process.exitCode).toBeUndefined();
    }, 5 * 60 * 1000);

});