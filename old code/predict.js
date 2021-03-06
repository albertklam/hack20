// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(
  projectId = 'hack-now-286520',
  location = 'us-central1',
  modelId = 'mask_detection_20200815064647',
  filePath = 'path_to_local_file.jpg'
) {
  // [START automl_vision_classification_predict]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'hack-now-286520';
  // const location = 'us-central1';
  // const modelId = 'mask_detection_20200815064647';
  // const filePath = 'path_to_local_file.jpg';

  // Imports the Google Cloud AutoML library
  const {PredictionServiceClient} = require('@google-cloud/automl').v1;
  const fs = require('fs');

  // Instantiates a client
  const client = new PredictionServiceClient();

  // Read the file content for translation.
  const content = fs.readFileSync(filePath);

  async function predict() {
    // Construct request
    // params is additional domain-specific parameters.
    // score_threshold is used to filter the result
    const request = {
      name: client.modelPath(projectId, location, modelId),
      payload: {
        image: {
          imageBytes: content,
        },
      },
    };

    const [response] = await client.predict(request);

    for (const annotationPayload of response.payload) {
      console.log(`Predicted class name: ${annotationPayload.displayName}`);
      console.log(
        `Predicted class score: ${annotationPayload.classification.score}`
      );
    }
  }

  predict();
  // [END automl_vision_classification_predict]
}

main(...process.argv.slice(2));
